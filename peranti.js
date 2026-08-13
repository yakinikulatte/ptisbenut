// Fail: peranti.js
document.write(`
<h2 style="margin-bottom: 1.2em; color: #3c3b3b; letter-spacing: 1px;">
    <i class="icon solid fa-laptop-house" style="color: #3182ce; margin-right: 10px;"></i>Peranti Bekalan Kerajaan
</h2>

<p>Berikut merupakan rekod agihan peranti komputer, pencetak, dan projektor yang diterima oleh pihak sekolah melalui program bekalan Kementerian Pendidikan Malaysia (KPM):</p>

<div style="overflow-x: auto; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); margin-bottom: 3em;">
    <table style="width: 100%; border-collapse: collapse; margin: 0; text-align: left;">
        <thead>
            <tr style="background-color: #f8f9fa; border-bottom: 2px solid #e2e8f0;">
                <th style="padding: 15px 20px; font-weight: 700; color: #4a5568; text-transform: uppercase; font-size: 0.85em; letter-spacing: 0.5px;">Program / Fasa</th>
                <th style="padding: 15px 20px; font-weight: 700; color: #4a5568; text-transform: uppercase; font-size: 0.85em; letter-spacing: 0.5px; text-align: center;">💻 Laptop</th>
                <th style="padding: 15px 20px; font-weight: 700; color: #4a5568; text-transform: uppercase; font-size: 0.85em; letter-spacing: 0.5px; text-align: center;">🖨️ Printer</th>
                <th style="padding: 15px 20px; font-weight: 700; color: #4a5568; text-transform: uppercase; font-size: 0.85em; letter-spacing: 0.5px; text-align: center;">📹 Projektor</th>
            </tr>
        </thead>
        <tbody>
            ${rekodPeranti.map(item => `
            <tr style="border-bottom: 1px solid #edf2f7; transition: background 0.2s;">
                <td style="padding: 18px 20px; font-weight: 600; color: #2d3748;">${item.fasa}</td>
                <td style="padding: 18px 20px; text-align: center; font-weight: bold; color: #2b6cb0; background-color: rgba(49, 130, 206, 0.03);">${item.laptop}</td>
                <td style="padding: 18px 20px; text-align: center; font-weight: bold; color: #4a5568;">${item.printer}</td>
                <td style="padding: 18px 20px; text-align: center; font-weight: bold; color: #4a5568;">${item.projektor}</td>
            </tr>
            `).join('')}
        </tbody>
    </table>
</div>
`);