<template>
    <main class="main">
        <div class="header">
            <h1 class="header-title text--primary">Informasi Stok Bahan Ajar</h1>
            <p class="header-subtitle">Monitoring Stok Bahan Ajar yang Tersedia.</p>
        </div>

        <section class="analytics">
            <ul class="card-analytic">
                <li>
                    <div class="card-analytics">
                        <div class="card-analytics__header">
                            <div class="card-analytics-icon" style="background-color: rgb(215, 225, 251);">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="currentColor">
                                    <path
                                        d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z" />
                                </svg>
                            </div>
                        </div>

                        <h2 class="card-analytics-title" style="margin-top: 12px;">Total Bahan Ajar</h2>
                        <p class="card-analytics-amount">450</p>
                    </div>
                </li>

                <li>
                    <div class="card-analytics">
                        <div class="card-analytics__header">
                            <div class="card-analytics-icon" style="background-color: rgb(215, 251, 215);">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="currentColor">
                                    <path
                                        d="M200-80q-33 0-56.5-23.5T120-160v-451q-18-11-29-28.5T80-680v-120q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v120q0 23-11 40.5T840-611v451q0 33-23.5 56.5T760-80H200Zm0-520v440h560v-440H200Zm-40-80h640v-120H160v120Zm200 280h240v-80H360v80Zm120 20Z" />
                                </svg>
                            </div>
                        </div>

                        <h2 class="card-analytics-title" style="margin-top: 12px;">Total Stok Tersedia</h2>
                        <p class="card-analytics-amount">100</p>
                    </div>
                </li>

                <li>
                    <div class="card-analytics">
                        <div class="card-analytics__header">
                            <div class="card-analytics-icon" style="background-color: rgb(255, 214, 156);">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="currentColor">
                                    <path
                                        d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm330.5-51.5Q520-263 520-280t-11.5-28.5Q497-320 480-320t-28.5 11.5Q440-297 440-280t11.5 28.5Q463-240 480-240t28.5-11.5ZM440-360h80v-200h-80v200Zm40-100Z" />
                                </svg>
                            </div>
                        </div>

                        <h2 class="card-analytics-title" style="margin-top: 12px;">Stok Hampir Habis</h2>
                        <p class="card-analytics-amount">6</p>
                    </div>
                </li>

                <li>
                    <div class="card-analytics">
                        <div class="card-analytics__header">
                            <div class="card-analytics-icon" style="background-color: rgb(251, 215, 215);">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="currentColor">
                                    <path
                                        d="M508.5-291.5Q520-303 520-320t-11.5-28.5Q497-360 480-360t-28.5 11.5Q440-337 440-320t11.5 28.5Q463-280 480-280t28.5-11.5ZM440-440h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                </svg>
                            </div>
                        </div>

                        <h2 class="card-analytics-title" style="margin-top: 12px;">Stok Kosong</h2>
                        <p class="card-analytics-amount">2</p>
                    </div>
                </li>
            </ul>
        </section>

        <section class="actions">
            <button type="button" class="add-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="currentColor">
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
                <p>Tambah</p>
            </button>

            <label class="search">
                <div class="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="currentColor">
                        <path
                            d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                    </svg>
                </div>
                <input type="text" placeholder="Cari berdasarkan kode atau nama...">
            </label>

        </section>

        <section class="inventory">
            <table>
                <thead>
                    <tr>
                        <td>KODE BAHAN AJAR</td>
                        <td>MATA KULIAH</td>
                        <td>MATA BAHAN AJAR</td>
                        <td>SEMESTER</td>
                        <td>JUMLAH STOK</td>
                        <td>STATUS STOK</td>
                        <td>AKSI</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>SISFORM11</td>
                        <td>PEMROGRAMAN WEB</td>
                        <td>PRAKTIK PEMROGRAMAN</td>
                        <td>4</td>
                        <td>352</td>
                        <td class="stock--available">
                            <p>TERSEDIA</p>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SISFORM11</td>
                        <td>PEMROGRAMAN WEB</td>
                        <td>PRAKTIK PEMROGRAMAN</td>
                        <td>4</td>
                        <td>352</td>
                        <td class="stock--available">
                            <p>TERSEDIA</p>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SISFORM11</td>
                        <td>PEMROGRAMAN WEB</td>
                        <td>PRAKTIK PEMROGRAMAN</td>
                        <td>4</td>
                        <td>352</td>
                        <td class="stock--available">
                            <p>TERSEDIA</p>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SISFORM11</td>
                        <td>PEMROGRAMAN WEB</td>
                        <td>PRAKTIK PEMROGRAMAN</td>
                        <td>4</td>
                        <td>352</td>
                        <td class="stock--available">
                            <p>TERSEDIA</p>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </section>

        <div class="pagination">
            <button type="button"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px" fill="currentColor">
                    <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                </svg></button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">...</button>
            <button type="button">45</button>
            <button type="button" style="rotate: 180deg;"><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                    viewBox="0 -960 960 960" width="24px" fill="currentColor">
                    <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                </svg></button>
        </div>
    </main>
</template>

<style scoped src="/src/styles/inventory.css"></style>