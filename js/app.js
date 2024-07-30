document.addEventListener('DOMContentLoaded', () => {
    const chartConfigs = [
        {
            id: 'line-chart-1',
            data: [/* your data here */],
            labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
            images: [
                {
                    src: '/images/C805-removebg-preview.png',
                    x: 2,
                    y: 180,
                    details: 'Boat A: This is a detailed description of Boat A. It includes its features, usage, and other relevant information.',
                    popupId: 'popup-chart-1',
                    gallery: ['/images/3dmodel2.png', '/images/3dmodel2.png', '/images/3dmodel2.png']
                },
                {
                    src: '/images/C835-removebg-preview.png',
                    x: 3,
                    y: 180,
                    details: 'Contribution 2 details',
                    popupId: 'popup-chart-1',
                    gallery: ['/images/C805-removebg-preview.png', '/images/C881-gallery2.jpg', '/images/C881-gallery3.jpg']
                },
                {
                    src: '/images/C840-removebg-preview.png',
                    x: 4,
                    y: 180,
                    details: 'Contribution 2 details',
                    popupId: 'popup-chart-1',
                    gallery: ['/images/C805-removebg-preview.png', '/images/C881-gallery2.jpg', '/images/C881-gallery3.jpg']
                },
                {
                    src: '/images/C855.png',
                    x: 5,
                    y: 180,
                    details: 'Contribution 2 details',
                    popupId: 'popup-chart-1',
                    gallery: ['/images/C805-removebg-preview.png', '/images/C881-gallery2.jpg', '/images/C881-gallery3.jpg']
                },
                {
                    src: '/images/C859-removebg-preview.png',
                    x: 10,
                    y: 180,
                    details: 'Contribution 2 details',
                    popupId: 'popup-chart-1',
                    gallery: ['/images/C872-removebg-preview.png', '/images/C872-removebg-preview.png', '/images/C881-gallery3.jpg']
                },
                {
                    src: '/images/C863-removebg-preview.png',
                    x: 3.8,
                    y: 180,
                    details: 'Contribution 2 details',
                    popupId: 'popup-chart-1',
                    gallery: ['/images/C872-removebg-preview.png', '/images/C872-removebg-preview.png', '/images/C881-gallery3.jpg']
                },
                {
                    src: '/images/CC869.png',
                    x: 9,
                    y: 180,
                    details: 'Contribution 2 details',
                    popupId: 'popup-chart-1',
                    gallery: ['/images/C872-removebg-preview.png', '/images/C872-removebg-preview.png', '/images/C881-gallery3.jpg']
                },
                {
                    src: '/images/C870-removebg-preview.png',
                    x: 8,
                    y: 180,
                    details: 'Contribution 2 details',
                    popupId: 'popup-chart-1',
                    gallery: ['/images/C872-removebg-preview.png', '/images/C872-removebg-preview.png', '/images/C881-gallery3.jpg']
                },
                {
                    src: '/images/C871-removebg-preview.png',
                    x: 7.5,
                    y: 180,
                    details: 'Contribution 2 details',
                    popupId: 'popup-chart-1',
                    gallery: ['/images/C872-removebg-preview.png', '/images/C872-removebg-preview.png', '/images/C881-gallery3.jpg']
                },
                {
                    src: '/images/C871-removebg-preview.png',
                    x: 7.5,
                    y: 180,
                    details: 'Contribution 2 details',
                    popupId: 'popup-chart-1',
                    gallery: ['/images/C872-removebg-preview.png', '/images/C872-removebg-preview.png', '/images/C881-gallery3.jpg']
                },
                {
                    src: '/images/C881-removebg-preview.png',
                    x: 7.5,
                    y: 100,
                    details: 'Contribution 2 details',
                    popupId: 'popup-chart-1',
                    gallery: ['/images/C872-removebg-preview.png', '/images/C872-removebg-preview.png', '/images/C881-gallery3.jpg']
                },
                {
                    src: '/images/C8900-removebg-preview.png',
                    x: 9.5,
                    y: 100,
                    details: 'Contribution 2 details',
                    popupId: 'popup-chart-1',
                    gallery: ['/images/C872-removebg-preview.png', '/images/C872-removebg-preview.png', '/images/C881-gallery3.jpg']
                },

                // Add more images if needed
            ]
        },
        {
            id: 'line-chart-2',
            data: [/* your data here */],
            labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
            images: [
                {
                    src: '/images/C872-removebg-preview.png',
                    x: 2,
                    y: 180,
                    details: 'Contribution 2 details',
                    popupId: 'popup-chart-2',
                    gallery: ['/images/C872-removebg-preview.png', '/images/C881-gallery2.jpg', '/images/C881-gallery3.jpg']
                },
            ]
        },
        {
            id: 'line-chart-3',
            data: [/* your data here */],
            labels: ['2022', '2023', '2024', '2025', '2026', '2027', '2028'],
            images: [
                { src: '/images/C840-removebg-preview.png', x: 4, y: 120, details: 'Boat: C840', popupId: 'popup-chart-3' },
                { src: '/images/C8900-removebg-preview.png', x: 1, y: 120, details: 'Future Plan 1 details', popupId: 'popup-chart-3' },
                { src: '/images/C881-removebg-preview.png', x: 3, y: 210, details: 'Future Plan 2 details', popupId: 'popup-chart-3' },
            ]
        }
    ];

    function createImagePlugin(images) {
        return {
            id: 'imagePlugin',
            beforeDraw: (chart) => {
                const { ctx, chartArea } = chart;
                const { top, left, width, height } = chartArea;

                images.forEach(img => {
                    const image = new Image();
                    image.src = img.src;
                    image.onload = () => {
                        const xPos = left + (width / chart.data.labels.length) * img.x;
                        const yPos = top + height - (height * (img.y / 250));

                        const imgWidth = 50;
                        const imgHeight = 40;

                        ctx.drawImage(image, xPos - imgWidth / 2, yPos - imgHeight / 2, imgWidth, imgHeight);

                        ctx.canvas.addEventListener('mousemove', (event) => {
                            const { offsetX, offsetY } = event;
                            if (offsetX >= xPos - imgWidth / 2 && offsetX <= xPos + imgWidth / 2 &&
                                offsetY >= yPos - imgHeight / 2 && offsetY <= yPos + imgHeight / 2) {
                                ctx.canvas.style.cursor = 'pointer';
                            } else {
                                ctx.canvas.style.cursor = 'default';
                            }
                        });

                        ctx.canvas.addEventListener('click', (event) => {
                            const { offsetX, offsetY } = event;
                            if (offsetX >= xPos - imgWidth / 2 && offsetX <= xPos + imgWidth / 2 &&
                                offsetY >= yPos - imgHeight / 2 && offsetY <= yPos + imgHeight / 2) {
                                showPopup(img.details, xPos, yPos, img.popupId, img.src, img.gallery);
                            }
                        });
                    };
                });
            }
        };
    }

    function showPopup(details, x, y, popupId, imageSrc, gallery) {
        const popup = document.getElementById(popupId);
        if (popup) {
            const galleryImages = gallery ? gallery.map(src =>
                `<img src="${src}" alt="Gallery Image" style="width: 100px; height: auto; margin: 5px;">`
            ).join('') : '';

            popup.innerHTML = `
            <div class="popup-content">
                <strong>${details}</strong>
                <br>
                <div class="gallery" style="display: none;">
                    ${galleryImages}
                </div>
                <button class="more-details-btn" onclick="window.location.href='./details.html?id=${encodeURIComponent(popupId)}&image=${encodeURIComponent(imageSrc)}&gallery=${encodeURIComponent(gallery.join(','))}&details=${encodeURIComponent(details)}'">More Details</button>
            </div>
        `;

            popup.style.display = 'block';
            popup.style.position = 'absolute';
            popup.style.left = `${x}px`;
            popup.style.top = `${y}px`;
            popup.classList.add('show');
            setTimeout(() => {
                popup.classList.remove('show');
                popup.classList.add('hide');
            }, 5000); // Hide after 5 seconds
        } else {
            console.error(`Popup with ID ${popupId} not found.`);
        }
    }


    chartConfigs.forEach(config => {
        const ctx = document.getElementById(config.id).getContext('2d');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: config.labels,
                datasets: [{
                    data: config.data,
                    borderColor: "#ffffff",
                    fill: false,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    [config.id + '-plugin']: createImagePlugin(config.images)
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Year',
                            position: 'top'
                        },
                        grid: {
                            display: true,
                            color: '#8B4513', // Brown color for grid lines
                            lineWidth: 2
                        },
                        ticks: {
                            display: true,
                            padding: 10
                        }
                    },
                    y: {
                        display: false,
                        grid: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    }
                },
                layout: {
                    padding: {
                        top: 40
                    }
                },
                elements: {
                    line: {
                        borderColor: '#ffffff',
                        borderWidth: 2
                    }
                },
                backgroundColor: '#003366' // Marine blue background
            },
            plugins: [createImagePlugin(config.images)]
        });
    });
});
