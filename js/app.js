document.addEventListener('DOMContentLoaded', () => {
    const chartConfigs = [
        {
            id: 'line-chart-1',
            label: "Working On",
            data: [/* your data here */],
            labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
            images: [
                { src: '/images/hero_1.jpg', x: 5, y: 80, details: 'Boat 1 details', popupId: 'popup-chart-1' },
                { src: '/images/boat1.jpg', x: 1, y: 200, details: 'Boat 2 details', popupId: 'popup-chart-1' },
                ]
        },
        {
            id: 'line-chart-2',
            label: "Already Contributed",
            data: [/* your data here */],
            labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
            images: [
                { src: '/images/hero_2.jpg', x: 8, y: 90, details: 'Contribution 1 details', popupId: 'popup-chart-2' },
                { src: '/images/contrib_2.jpg', x: 2, y: 180, details: 'Contribution 2 details', popupId: 'popup-chart-2' },

            ]
        },
        {
            id: 'line-chart-3',
            label: "Future Plan",
            data: [/* your data here */],
            labels: ['2022', '2023', '2024', '2025', '2026', '2027', '2028'],
            images: [
                { src: '/images/person_1.jpg', x: 1, y: 120, details: 'Future Plan 1 details', popupId: 'popup-chart-3' },
                { src: '/images/hero_2.jpg', x: 3, y: 210, details: 'Future Plan 2 details', popupId: 'popup-chart-3' },

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
                                showPopup(img.details, xPos, yPos, img.popupId);
                            }
                        });
                    };
                });
            }
        };
    }

    function showPopup(details, x, y, popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.innerHTML = `
              <div class="popup-content">
                <strong>${details}</strong>
                <br>
                <button class="more-details-btn" onclick="window.location.href='./details.html?id=${popupId}'">More Details</button>
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
        }
    }

    chartConfigs.forEach(config => {
        new Chart(document.getElementById(config.id).getContext('2d'), {
            type: 'line',
            data: {
                labels: config.labels,
                datasets: [{
                    data: config.data,
                    label: config.label,
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
