import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.json();

    const { companyName, authorizedPersonName, authorizedPersonPhone, dailyReceipts, branches, accountingSoftware } = formData;

    const accountingSoftwareLabels = {
      'muhasebe-1': 'DynMaster',
      'muhasebe-2': 'Mikro',
      'muhasebe-3': 'Logo',
      'muhasebe-4': 'Diğer',
      'muhasebe-5': 'Kullanmıyor',
      '': 'Seçilmedi'
    };

    const accountingSoftwareLabel = accountingSoftwareLabels[accountingSoftware] || accountingSoftware;


    // Nodemailer taşıyıcısını oluşturun
    // Bu bilgileri kendi e-posta servisinizin kimlik bilgileriyle değiştirmeniz gerekmektedir.
    // Örneğin, Gmail için:
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Kullandığınız e-posta servisi (örn: 'gmail', 'outlook', 'SendGrid')
      auth: {
        user: process.env.EMAIL_USER, // E-posta adresiniz
        pass: process.env.EMAIL_PASS, // E-posta şifreniz veya uygulamaya özel şifreniz
      },
    });

    // E-posta içeriği
    const mailOptions = {
      from: process.env.EMAIL_USER, // Gönderen adresi
      to: 'info@enpos.com.tr, dorukbiyikli@enpos.com.tr', // Alıcı adresleri
      subject: 'Yeni DynCash Demo İsteği',
      html: `
        <p><b>Yeni İletişim Formu Başvurusu:</b></p>
        <p><b>Firma İsmi:</b> ${companyName}</p>
        <p><b>Yetkili İsmi:</b> ${authorizedPersonName}</p>
        <p><b>Yetkili Telefon Numarası:</b> ${authorizedPersonPhone}</p>
        <p><b>Günlük Fiş Sayısı:</b> ${dailyReceipts}</p>
        <p><b>Şube Sayısı:</b> ${branches}</p>
        <p><b>Muhasebe Yazılımı:</b> ${accountingSoftwareLabel}</p>
      `,
    };

    // E-postayı gönderin
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Failed to send email.', error: errorMessage }, { status: 500 });
  }
}
