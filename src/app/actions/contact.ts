"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  organisation?: string;
  industry?: string;
  service?: string;
  message: string;
}

export interface ContactFormResult {
  success: boolean;
  message: string;
  error?: string;
}

export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactFormResult> {
  // Validate required fields
  if (!formData.name || !formData.email || !formData.message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
      error: "VALIDATION_ERROR",
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
      error: "INVALID_EMAIL",
    };
  }

  try {
    // Send email notification to BioAIguru
    const { error } = await resend.emails.send({
      from: "BioAIguru Contact <onboarding@resend.dev>",
      to: ["bioaiguru@gmail.com"],
      replyTo: formData.email,
      subject: `New Enquiry from ${formData.name}${formData.organisation ? ` (${formData.organisation})` : ""}`,
      html: generateContactEmailHtml(formData),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message: "Something went wrong. Please try again or email us directly at bioaiguru@gmail.com",
        error: "EMAIL_ERROR",
      };
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: "BioAIguru <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Thank you for contacting BioAIguru",
      html: generateConfirmationEmailHtml(formData.name),
    });

    return {
      success: true,
      message: "Thank you for your message. We will get back to you within 24 hours.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly at bioaiguru@gmail.com",
      error: "SERVER_ERROR",
    };
  }
}

function generateContactEmailHtml(formData: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #4a78b5 0%, #3d6a9f 100%); padding: 30px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Enquiry Received</h1>
      </div>
      
      <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #4a78b5; width: 140px;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${escapeHtml(formData.name)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #4a78b5;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${escapeHtml(formData.email)}" style="color: #4a78b5;">${escapeHtml(formData.email)}</a></td>
          </tr>
          ${formData.organisation ? `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #4a78b5;">Organisation</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${escapeHtml(formData.organisation)}</td>
          </tr>
          ` : ""}
          ${formData.industry ? `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #4a78b5;">Industry</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${escapeHtml(formData.industry)}</td>
          </tr>
          ` : ""}
          ${formData.service ? `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #4a78b5;">Service Interest</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${escapeHtml(formData.service)}</td>
          </tr>
          ` : ""}
        </table>
        
        <div style="margin-top: 24px;">
          <h3 style="color: #4a78b5; margin: 0 0 12px 0; font-size: 16px;">Message</h3>
          <div style="background: white; padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${escapeHtml(formData.message)}</div>
        </div>
        
        <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; font-size: 13px; color: #6b7280;">
            Received on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "short" })} IST
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateConfirmationEmailHtml(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Contacting BioAIguru</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #4a78b5 0%, #3d6a9f 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px; font-family: 'Source Serif 4', Georgia, serif;">BioAIguru</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">Bioinformatics Solutions</p>
      </div>
      
      <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <h2 style="color: #1f2937; margin: 0 0 16px 0;">Thank you for reaching out, ${escapeHtml(name)}!</h2>
        
        <p style="margin: 0 0 16px 0; color: #4b5563;">
          We have received your enquiry and our team will review it promptly. You can expect to hear back from us within 24 hours during business days.
        </p>
        
        <p style="margin: 0 0 24px 0; color: #4b5563;">
          In the meantime, feel free to explore our services or reach out to us directly:
        </p>
        
        <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
          <p style="margin: 0 0 8px 0; font-size: 14px;">
            <strong style="color: #4a78b5;">Email:</strong> 
            <a href="mailto:bioaiguru@gmail.com" style="color: #4a78b5;">bioaiguru@gmail.com</a>
          </p>
          <p style="margin: 0 0 8px 0; font-size: 14px;">
            <strong style="color: #4a78b5;">Phone:</strong> 
            <a href="tel:+919466101466" style="color: #4a78b5;">+91 94661 01466</a>
          </p>
          <p style="margin: 0 0 8px 0; font-size: 14px;">
            <strong style="color: #4a78b5;">WhatsApp:</strong> 
            <a href="https://wa.me/919466101466" style="color: #4a78b5;">Chat with us</a>
          </p>
          <p style="margin: 0; font-size: 14px;">
            <strong style="color: #4a78b5;">Hours:</strong> 
            Mon-Fri, 9:00 AM - 6:00 PM IST
          </p>
        </div>
        
        <div style="margin-top: 24px; text-align: center;">
          <a href="https://bioaiguru.com" style="display: inline-block; background: #4a78b5; color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 500;">Visit Our Website</a>
        </div>
        
        <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #9ca3af;">
            BioAIguru | MA227 Sector 26, MAPSKO GARDEN ESTATE, Sonipat, Haryana 131001
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

export interface NewsletterResult {
  success: boolean;
  message: string;
  error?: string;
}

export async function subscribeToNewsletter(
  email: string
): Promise<NewsletterResult> {
  // Validate email
  if (!email) {
    return {
      success: false,
      message: "Please enter your email address.",
      error: "VALIDATION_ERROR",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
      error: "INVALID_EMAIL",
    };
  }

  try {
    // Add contact to Resend Contacts
    const { data, error } = await resend.contacts.create({
      email,
      unsubscribed: false,
      properties: {
        source: "newsletter_signup",
        subscribed_at: new Date().toISOString(),
      },
    });

    if (error) {
      // Check if already subscribed
      if (error.message?.toLowerCase().includes("already exists")) {
        return {
          success: true,
          message: "You are already subscribed to our newsletter!",
        };
      }
      console.error("Resend contacts error:", error);
      return {
        success: false,
        message: "Something went wrong. Please try again later.",
        error: "SUBSCRIPTION_ERROR",
      };
    }

    console.log("New subscriber added:", data?.id);

    // Send welcome email
    await resend.emails.send({
      from: "BioAIguru <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to BioAIguru Newsletter!",
      html: generateWelcomeEmailHtml(),
    });

    return {
      success: true,
      message: "Thank you for subscribing! You will receive our latest updates.",
    };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
      error: "SERVER_ERROR",
    };
  }
}

function generateWelcomeEmailHtml(): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to BioAIguru Newsletter</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #4a78b5 0%, #3d6a9f 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px; font-family: 'Source Serif 4', Georgia, serif;">BioAIguru</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">Bioinformatics Solutions</p>
      </div>
      
      <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <h2 style="color: #1f2937; margin: 0 0 16px 0;">Welcome to our newsletter!</h2>
        
        <p style="margin: 0 0 16px 0; color: #4b5563;">
          Thank you for subscribing to the BioAIguru newsletter. You are now part of a community passionate about bioinformatics, genomics, and computational biology.
        </p>
        
        <p style="margin: 0 0 16px 0; color: #4b5563;">
          Here's what you can expect from us:
        </p>
        
        <ul style="margin: 0 0 24px 0; padding-left: 20px; color: #4b5563;">
          <li style="margin-bottom: 8px;">Latest insights in bioinformatics and genomics</li>
          <li style="margin-bottom: 8px;">Industry trends and research updates</li>
          <li style="margin-bottom: 8px;">Tips and best practices for data analysis</li>
          <li style="margin-bottom: 8px;">Exclusive content and early access to resources</li>
        </ul>
        
        <div style="text-align: center; margin-top: 24px;">
          <a href="https://bioaiguru.com/blog" style="display: inline-block; background: #4a78b5; color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 500;">Explore Our Blog</a>
        </div>
        
        <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
          <p style="margin: 0 0 8px 0; font-size: 12px; color: #9ca3af;">
            BioAIguru | MA227 Sector 26, MAPSKO GARDEN ESTATE, Sonipat, Haryana 131001
          </p>
          <p style="margin: 0; font-size: 12px; color: #9ca3af;">
            You received this email because you subscribed to our newsletter.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}
