// Fail: pentadbiran.js
document.write(`
<h2 style="margin-bottom: 1.5em; text-align: center; color: #3c3b3b; letter-spacing: 1px;">
    <i class="icon solid fa-info-circle" style="color: #f2849e; margin-right: 10px;"></i>Maklumat Pentadbiran & ICT Sekolah
</h2>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 25px; margin-bottom: 3em;">

    <div style="background: #ffffff; border-top: 4px solid #f2849e; padding: 25px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: center; transition: all 0.3s ease;">
        <div style="background: rgba(242, 132, 158, 0.1); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px auto;">
            <i class="icon solid fa-user-tie" style="font-size: 24px; color: #f2849e;"></i>
        </div>
        <h4 style="margin: 0 0 8px 0; color: #3c3b3b; text-transform: uppercase; font-size: 0.9em; letter-spacing: 1px;">Guru Besar</h4>
        <p style="margin: 0; font-weight: 600; color: #555; font-size: 1.1em;">${namaGuruBesar}</p>
        <span style="font-size: 0.8em; color: #a0a0a0;">Pentadbir Utama</span>
    </div>

    <div style="background: #ffffff; border-top: 4px solid #3182ce; padding: 25px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: center; transition: all 0.3s ease;">
        <div style="background: rgba(49, 130, 206, 0.1); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px auto;">
            <i class="icon solid fa-laptop" style="font-size: 24px; color: #3182ce;"></i>
        </div>
        <h4 style="margin: 0 0 8px 0; color: #3c3b3b; text-transform: uppercase; font-size: 0.9em; letter-spacing: 1px;">Guru ICT / Media</h4>
        <p style="margin: 0; font-weight: 600; color: #555; font-size: 1.1em;">${namaGuruICT}</p>
        <span style="font-size: 0.8em; color: #a0a0a0;">Pengurusan Teknikal</span>
    </div>

    <div style="background: #ffffff; border-top: 4px solid #38a169; padding: 25px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: center; transition: all 0.3s ease;">
        <div style="background: rgba(56, 161, 105, 0.1); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px auto;">
            <i class="icon solid fa-phone-alt" style="font-size: 24px; color: #38a169;"></i>
        </div>
        <h4 style="margin: 0 0 8px 0; color: #3c3b3b; text-transform: uppercase; font-size: 0.9em; letter-spacing: 1px;">No. Telefon Guru ICT</h4>
        <p style="margin: 0; font-weight: 600; color: #555; font-size: 1.1em;">${noTelICT}</p>
        <span style="font-size: 0.8em; color: #a0a0a0; display: block; margin-top: 5px;">
            <a href="https://wa.me/${noWhatsapp}" target="_blank" style="color: #38a169; text-decoration: none; font-weight: bold;"><i class="icon brands fa-whatsapp"></i> Hubungi WhatsApp</a>
        </span>
    </div>

    <div style="background: #ffffff; border-top: 4px solid #805ad5; padding: 25px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: center; transition: all 0.3s ease;">
        <div style="background: rgba(128, 90, 213, 0.1); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px auto;">
            <i class="icon solid fa-wifi" style="font-size: 24px; color: #805ad5;"></i>
        </div>
        <h4 style="margin: 0 0 8px 0; color: #3c3b3b; text-transform: uppercase; font-size: 0.9em; letter-spacing: 1px;">Talian Internet</h4>
        <p style="margin: 0; font-weight: 600; color: #555; font-size: 1.1em;">${jenisInternet}</p>
        <span style="font-size: 0.8em; color: #a0a0a0;">Kelajuan: ${kelajuanInternet}</span>
    </div>

</div>
`);