'use strict';

const { Resend } = require('resend');

/**
 * EMAIL SERVICE
 * Uses Resend SDK for reliable email delivery.
 * Requires RESEND_API_KEY, ADMIN_EMAIL, and FROM_EMAIL in .env.
 */

if (!process.env.RESEND_API_KEY) {
  console.error('[EmailService] CRITICAL: RESEND_API_KEY is missing from .env');
}

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * HTML TEMPLATE — Admin Notification
 * Alerts the site owner (Huzaifa) about a new lead submission.
 */
function adminEmailHtml(data, ts) {
  return `
    <div style="font-family: 'Inter', -apple-system, sans-serif; background-color: #F9FAFB; padding: 40px 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <div style="background-color: #1A365D; padding: 24px; text-align: center;">
          <h1 style="color: #FFFFFF; margin: 0; font-size: 20px; letter-spacing: 0.1em; text-transform: uppercase;">⚡ Claimax Solutions</h1>
        </div>
        <div style="padding: 40px;">
          <h2 style="color: #111827; font-size: 18px; margin-top: 0; border-bottom: 2px solid #D4AF37; padding-bottom: 12px; display: inline-block;">New Sales Inquiry</h2>
          <p style="color: #4B5563; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
            A new contact form request was received on <strong>${ts}</strong>.
          </p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #F3F4F6; color: #6B7280; font-size: 12px; text-transform: uppercase; width: 140px;">Full Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #F3F4F6; color: #111827; font-size: 14px; font-weight: 600;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #F3F4F6; color: #6B7280; font-size: 12px; text-transform: uppercase;">Practice</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #F3F4F6; color: #111827; font-size: 14px; font-weight: 600;">${data.practice}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #F3F4F6; color: #6B7280; font-size: 12px; text-transform: uppercase;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #F3F4F6; color: #1A365D; font-size: 14px;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #F3F4F6; color: #6B7280; font-size: 12px; text-transform: uppercase;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #F3F4F6; color: #111827; font-size: 14px;">${data.phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #F3F4F6; color: #6B7280; font-size: 12px; text-transform: uppercase;">Revenue</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #F3F4F6; color: #111827; font-size: 14px;">${data.revenue}</td>
            </tr>
          </table>

          <div style="background-color: #F9FAFB; padding: 20px; border-radius: 6px; border-left: 4px solid #D4AF37;">
            <p style="margin: 0; color: #6B7280; font-size: 12px; text-transform: uppercase; margin-bottom: 8px;">Message</p>
            <p style="margin: 0; color: #1F2937; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
        <div style="background-color: #F3F4F6; padding: 20px; text-align: center; color: #9CA3AF; font-size: 11px;">
          Claimax Solutions Notification Node · New York, NY
        </div>
      </div>
    </div>
  `;
}

/**
 * HTML TEMPLATE — Auto-Reply
 * Sent to the potential lead immediately after submission.
 */
function autoReplyHtml(data) {
  const firstName = data.name.split(' ')[0];
  return `
    <div style="font-family: 'Inter', -apple-system, sans-serif; color: #1F2937; max-width: 600px; margin: 0 auto; line-height: 1.6;">
      <p style="font-size: 16px;">Hello ${firstName},</p>
      
      <p style="font-size: 16px;">Thank you for your interest in <strong>Claimax Solutions</strong>. This is a quick confirmation that we have securely received your request for a revenue opportunity report.</p>
      
      <p style="font-size: 16px;">Our billing analysts are currently reviewing your practice details. One of our senior specialists will reach out to you within <strong>one business day</strong> with the next steps.</p>
      
      <div style="margin: 32px 0; padding: 24px; border: 1px solid #E5E7EB; border-radius: 8px;">
        <h3 style="margin-top: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280;">Our Contact Details</h3>
        <p style="margin-bottom: 8px;">📧 <a href="mailto:ntalha403@gmail.com" style="color:#0A84FF; text-decoration: none;">ntalha403@gmail.com</a></p>
        <p style="margin: 0;">📞 <a href="tel:+923346371564" style="color:#0A84FF; text-decoration: none;">+92 334 6371564</a></p>
      </div>

      <p style="font-size: 16px;">We look forward to optimizing your revenue cycle.</p>
      
      <p style="font-size: 16px; margin-top: 40px;">Best regards,<br/><strong>The Claimax Solutions Team</strong></p>
      
      <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 40px 0;" />
      <p style="font-size: 12px; color: #9CA3AF; text-align: center;">© 2024 Claimax Solutions. All rights reserved.<br/>120 Broadway, New York, NY 10271</p>
    </div>
  `;
}

/**
 * Orchestrates sending both the admin notification and the auto-reply via Resend.
 */
async function sendContactEmails(data) {
  const ts = new Date().toLocaleString('en-US', { dateStyle: 'full' });

  try {
    // 1. Send Admin Notification
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [process.env.ADMIN_EMAIL],
      subject: `New Lead: ${data.practice || 'Practice'} — Claimax Solutions`,
      html: adminEmailHtml(data, ts),
      reply_to: data.email,
    });

    if (adminError) {
      console.error('[Resend Error - Admin notification]', adminError);
      throw new Error(`Email failed: ${adminError.message}`);
    }

    // 2. Send Auto-Reply to customer
    const { data: userData, error: userError } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [data.email],
      subject: 'Request Received — Claimax Solutions',
      html: autoReplyHtml(data),
      reply_to: process.env.ADMIN_EMAIL,
    });

    if (userError) {
      console.warn('[Resend Error - User auto-reply]', userError);
    }
  } catch (err) {
    console.error('[EmailService Error]', err);
    throw err;
  }
}

module.exports = { sendContactEmails };
