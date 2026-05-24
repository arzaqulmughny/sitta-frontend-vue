const onSubmitSearch = (event) => {
    event.preventDefault();

    const value = document.getElementsByName('input-waybill-input')[0].value

    if(!value || value == '') {
        alert('Masukkan nomor resi')
        return
    }

    if (value === 'DO-123123') {
        document.getElementById('result').style.display = 'grid';
    } else {
        alert('Data tidak ditemukan')
    }
}