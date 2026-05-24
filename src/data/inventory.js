
const initialData = [
    {
        kode: "EKMA4116",
        judul: "Pengantar Manajemen",
        kategori: "MK Wajib",
        upbjj: "Jakarta",
        lokasiRak: "R1-A3",
        harga: 65000,
        qty: 28,
        safety: 20,
        catatanHTML: "<em>Edisi 2024, cetak ulang</em>"
    },
    {
        kode: "EKMA4115",
        judul: "Pengantar Akuntansi",
        kategori: "MK Wajib",
        upbjj: "Jakarta",
        lokasiRak: "R1-A4",
        harga: 60000,
        qty: 7,
        safety: 15,
        catatanHTML: "<strong>Cover baru</strong>"
    },
    {
        kode: "BIOL4201",
        judul: "Biologi Umum (Praktikum)",
        kategori: "Praktikum",
        upbjj: "Surabaya",
        lokasiRak: "R3-B2",
        harga: 80000,
        qty: 12,
        safety: 10,
        catatanHTML: "Butuh <u>pendingin</u> untuk kit basah"
    },
    {
        kode: "FISIP4001",
        judul: "Dasar-Dasar Sosiologi",
        kategori: "MK Pilihan",
        upbjj: "Makassar",
        lokasiRak: "R2-C1",
        harga: 55000,
        qty: 2,
        safety: 8,
        catatanHTML: "Stok <i>menipis</i>, prioritaskan reorder"
    }
]

const getInventoryData = (filters = {}) => {
    const stored = localStorage.getItem('inventory');
    let data = null;

    if (stored) {
        data = JSON.parse(stored);
    } else {
        localStorage.setItem('inventory', JSON.stringify(initialData));
        data = initialData;
    }

    if (filters?.branch && filters.branch.length > 0) {
        data = data.filter(item => item.upbjj == filters.branch)
    }

    if (filters?.subject_category && filters.subject_category.length > 0) {
        data = data.filter(item => item.kategori == filters.subject_category)
    }

    if (filters?.stock_status && filters.stock_status.length > 0) {
        switch (filters.stock_status) {
            case 'in_stock':
                data = data.filter(item => item.qty > item.safety);
                break;
            case 'need_reorder':
                data = data.filter(item => item.qty <= item.safety && item.qty > 0);
                break;
            case 'out_of_stock':
                data = data.filter(item => item.qty == 0);
                break;
            default:
                break;
        }
    }

    if (filters?.order_by) {
        const sort = filters.order_by_sort ?? 'asc';

        data = data.sort((a, b) => {
            const key = filters.order_by;
            const valA = a[key] ?? '';
            const valB = b[key] ?? '';
            const isNumber = !isNaN(valA) && !isNaN(valB);

            if (isNumber) {
                return sort === 'asc'
                    ? Number(valA) - Number(valB)
                    : Number(valB) - Number(valA);
            }

            return sort === 'asc'
                ? String(valA).localeCompare(String(valB))
                : String(valB).localeCompare(String(valA));
        });
    }

    if (filters?.search && filters.search.length > 0) {
        data = data.filter(item => item.kode.toLowerCase().includes(filters.search.toLowerCase()) || item.judul.toLowerCase().includes(filters.search.toLowerCase()))
    }

    return data;
}

const storeInventoryData = (payload) => {
    const currentData = getInventoryData();
    currentData.push(payload);

    localStorage.setItem('inventory', JSON.stringify(currentData));

    return true;
}

const updateStockData = (payload) => {
    const code = payload.kode;
    let currentData = getInventoryData();

    if (currentData) {
        currentData = currentData.map((item) => item.kode == code ? { ...item, ...payload } : item)
        localStorage.setItem('inventory', JSON.stringify(currentData));
        return true;
    }
}

export { getInventoryData, storeInventoryData, updateStockData };
