$(document).ready(function () {
    $('#searchBtn').click(function () {
        const searchInput = $('#searchInput').val().trim();
        if (searchInput === '') {
            alert('Masukkan kecamatan atau kelurahan terlebih dahulu!');
            return;
        }

        $.ajax({
            url: 'https://kodepos-2d475.firebaseio.com/kota_kab/k69.json?print=pretty',
            type: 'GET',
            success: function (data) {
                let found = false;
                let resultHTML = '';

                $.each(data, function (key, entry) {
                    if (entry.kecamatan.toLowerCase() === searchInput.toLowerCase() || entry.kelurahan.toLowerCase() === searchInput.toLowerCase()) {
                        resultHTML += `<p><strong>Kecamatan:</strong> ${entry.kecamatan}</p>`;
                        resultHTML += `<p><strong>Kelurahan:</strong> ${entry.kelurahan}</p>`;
                        resultHTML += `<p><strong>Kodepos:</strong> ${entry.kodepos}</p>`;
                        found = true;
                    }
                });

                if (!found) {
                    resultHTML = '<p>Data tidak ditemukan.</p>';
                }

                $('#result').html(resultHTML);
            },
            error: function (xhr, status, error) {
                console.error('Gagal mengambil data dari API:', error);
                alert('Gagal mengambil data dari API. Silakan coba lagi.');
            }
        });
    });
});