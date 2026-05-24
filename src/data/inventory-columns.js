import subjectCategoriesData from "@/data/subject-category";
import branchesData from "@/data/branch"

export default [{
    column: 'kode',
    title: 'KODE MK',
    type: 'text',
    placeholder: 'Masukkan Kode Mata Kuliah',
    required: true,
}, {
    column: 'judul',
    title: 'NAMA MK',
    type: 'text',
    placeholder: 'Masukkan Nama Mata Kuliah',
    required: true,
}, {
    column: 'kategori',
    title: 'KATEGORI MK',
    type: 'select',
    data: subjectCategoriesData,
    placeholder: 'Pilih Kategori Mata Kuliah',
    required: true,
}, {
    column: 'upbjj',
    title: 'UT DAERAH',
    type: 'select',
    data: branchesData,
    placeholder: 'Pilih UT Daerah',
    required: true,
}, {
    column: 'lokasiRak',
    title: 'LOKASI RAK',
    type: 'text',
    placeholder: 'Masukkan Lokasi Rak',
    required: true,
}, {
    column: 'qty',
    title: 'STOK TERSEDIA',
    type: 'number',
    placeholder: 'Masukkan Stok Tersedia',
    required: true,
}, {
    column: 'safety',
    title: 'STOK MINIMUM',
    type: 'number',
    placeholder: 'Masukkan Stok Minimum',
    required: true,
}, {
    column: 'status',
    title: 'STATUS',
    type: 'hidden',
}, {
    column: 'catatan',
    title: 'CATATAN',
    type: 'textarea',
    placeholder: 'Masukkan Catatan',
    required: false
}];