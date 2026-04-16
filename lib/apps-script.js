// ============================================================
// GOOGLE APPS SCRIPT — Dinata Organizer Lead Management
// ============================================================
// Cara setup:
// 1. Buka Google Sheets baru
// 2. Klik Extensions > Apps Script
// 3. Paste seluruh kode ini
// 4. Klik Deploy > New Deployment > Web App
// 5. Set "Execute as: Me" dan "Who has access: Anyone"
// 6. Copy URL deployment, paste ke .env.local NEXT_PUBLIC_APPS_SCRIPT_URL
// ============================================================

const SHEET_NAME = 'Leads';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getOrCreateSheet();

    if (data.action === 'update_status') {
      // Update status lead yang sudah ada
      updateLeadStatus(sheet, data.idKonsultasi, data.status);
    } else {
      // Tambah lead baru
      addNewLead(sheet, data);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // Header row
    sheet.getRange(1, 1, 1, 8).setValues([[
      'ID Konsultasi',
      'Nama',
      'No HP',
      'Tanggal Acara',
      'Kota',
      'Status',
      'Timestamp',
      'Last Updated'
    ]]);
    sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function addNewLead(sheet, data) {
  const now = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
  sheet.appendRow([
    data.idKonsultasi || '',
    data.nama || '',
    data.noHp || '',
    data.tanggalAcara || '',
    data.kota || '',
    data.status || 'Prospek',
    now,
    now
  ]);
}

function updateLeadStatus(sheet, idKonsultasi, newStatus) {
  const data = sheet.getDataRange().getValues();
  const now = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === idKonsultasi) {
      sheet.getRange(i + 1, 6).setValue(newStatus); // Status column
      sheet.getRange(i + 1, 8).setValue(now);         // Last Updated column
      break;
    }
  }
}

// GET handler for testing
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Dinata Organizer Lead API is running'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
