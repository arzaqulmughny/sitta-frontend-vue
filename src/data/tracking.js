const data = {
    "DO2025-0001": {
        nim: "123456789",
        nama: "Rina Wulandari",
        status: "Dalam Perjalanan",
        ekspedisi: "JNE",
        tanggalKirim: "2025-08-25",
        paket: "PAKET-UT-001",
        total: 120000,
        perjalanan: [
            { waktu: "2025-08-25 10:12:20", keterangan: "Penerimaan di Loket: TANGSEL" },
            { waktu: "2025-08-25 14:07:56", keterangan: "Tiba di Hub: JAKSEL" },
            { waktu: "2025-08-26 08:44:01", keterangan: "Diteruskan ke Kantor Tujuan" }
        ]
    }
};

const packages = [
    { kode: "PAKET-UT-001", nama: "PAKET IPS Dasar", isi: ["EKMA4116", "EKMA4115"], harga: 120000 },
    { kode: "PAKET-UT-002", nama: "PAKET IPA Dasar", isi: ["BIOL4201", "FISIP4001"], harga: 140000 }
]

const shippings = [
    { kode: "REG", nama: "Reguler (3-5 hari)" },
    { kode: "EXP", nama: "Ekspres (1-2 hari)" }
];

const columns = [{
    column: 'nim',
    title: 'Nomor Induk Mahasiswa (NIM)',
    type: 'text',
    placeholder: 'Masukkan Nomor Induk Mahasiswa (NIM)',
    required: true,
}, {
    column: 'ekspedisi',
    title: 'Ekspedisi',
    type: 'select',
    data: shippings,
    placeholder: 'Pilih Ekspedisi',
    required: true,
}, {
    column: 'paket',
    title: 'Paket',
    type: 'select',
    data: packages,
    placeholder: 'Pilih Paket',
    required: true,
}, {
    column: 'tanggalKirim',
    title: 'Tanggal Kirim',
    type: 'date',
    data: packages,
    placeholder: 'Pilih Tanggal Kirim',
    required: true,
}];

const findTrackingData = (number) => {
    const result = localStorage.getItem('trackings') ? JSON.parse(localStorage.getItem('trackings'))[number] : null

    if (!result) {
        return null;
    }

    return result;
}

export const generateDONumber = () => {
    const year = new Date().getFullYear()

    // Ambil data tracking
    const trackings =
        JSON.parse(localStorage.getItem('trackings')) || {}

    // Ambil semua key
    const keys = Object.keys(trackings)

    // Filter nomor DO tahun berjalan
    const currentYearKeys = keys.filter((key) =>
        key.startsWith(`DO${year}-`)
    )

    // Cari sequence terbesar
    let lastSequence = 0

    currentYearKeys.forEach((key) => {
        const sequence = key.split('-')[1]
        if (Number(sequence) > lastSequence) {
            lastSequence = Number(sequence)
        }
    })

    // Increment sequence
    const nextSequence = lastSequence + 1

    // Format 4 digit
    const formattedSequence =
        String(nextSequence).padStart(4, '0')

    return `DO${year}-${formattedSequence}`
}

const storeTrackingData = (payload) => {
    const number = generateDONumber();
    let currentTrackingsData = localStorage.getItem('trackings')

    if (currentTrackingsData) {
        currentTrackingsData = JSON.parse(currentTrackingsData);
        currentTrackingsData[number] = {...payload, total: payload.harga}
    }

    localStorage.setItem('trackings', JSON.stringify(currentTrackingsData))

    return number;
}

export { findTrackingData, columns, packages, data, storeTrackingData }