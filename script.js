let currentPage = 0;
        const totalPages = 7;
        const pageNames = ['Portada', 'Our Moments', 'Things I Love', 'Our Month', 'Our Song', 'Mini Polaroids', 'A Letter for You'];

        function startReading() {
            document.querySelector('.magazine-cover').style.display = 'none';
            currentPage = 1;
            showPage(currentPage);
            updateNavigation();
        }

        function showPage(pageNum) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show current page
            if (pageNum > 0) {
                document.getElementById(`page${pageNum}`).classList.add('active');
            }
            
            // Update page indicator
            document.getElementById('pageIndicator').textContent = pageNames[pageNum];
        }

        function nextPage() {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
                updateNavigation();
            }
        }

        function previousPage() {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
                updateNavigation();
            } else if (currentPage === 1) {
                currentPage = 0;
                document.querySelector('.magazine-cover').style.display = 'flex';
                document.querySelectorAll('.page').forEach(page => {
                    page.classList.remove('active');
                });
                updateNavigation();
            }
        }

        function updateNavigation() {
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            
            prevBtn.disabled = currentPage === 0;
            nextBtn.disabled = currentPage === totalPages;
            
            if (currentPage === 0) {
                nextBtn.textContent = 'Empezar a leer →';
                nextBtn.onclick = startReading;
            } else {
                nextBtn.textContent = currentPage === totalPages ? 'Fin ♡' : 'Siguiente →';
                nextBtn.onclick = nextPage;
            }
        }

        // Generate calendar
        function generateCalendar() {
            const calendar = document.getElementById('calendar');
            const daysInMonth = 31;
            
            // Add day headers
            const dayHeaders = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
            dayHeaders.forEach(day => {
                const dayHeader = document.createElement('div');
                dayHeader.className = 'calendar-day';
                dayHeader.style.background = '#ffc107';
                dayHeader.style.color = 'white';
                dayHeader.style.fontWeight = 'bold';
                dayHeader.textContent = day;
                calendar.appendChild(dayHeader);
            });
            
            // Add days of the month
            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day';
                dayElement.textContent = day;
                
                // Make day 14 the anniversary day (you can change this)
                if (day === 14) {
                    dayElement.classList.add('anniversary-day');
                    dayElement.innerHTML = day + '<br>♡';
                    dayElement.style.fontSize = '0.9rem';
                }
                
                dayElement.addEventListener('click', function() {
                    // Remove previous anniversary day
                    document.querySelectorAll('.anniversary-day').forEach(el => {
                        el.classList.remove('anniversary-day');
                        el.innerHTML = el.textContent.replace('♡', '');
                    });
                    
                    // Set new anniversary day
                    this.classList.add('anniversary-day');
                    this.innerHTML = day + '<br>♡';
                    this.style.fontSize = '0.9rem';
                });
                
                calendar.appendChild(dayElement);
            }
        }

        // Add new love reason
        function addLoveReason() {
            const loveList = document.getElementById('loveList');
            const newItem = document.createElement('li');
            newItem.className = 'love-item';
            newItem.contentEditable = true;
            newItem.textContent = 'Escribe aquí otra razón por la que te amo...';
            
            loveList.appendChild(newItem);
            newItem.focus();
            
            newItem.addEventListener('focus', function() {
                if (this.textContent === 'Escribe aquí otra razón por la que te amo...') {
                    this.textContent = '';
                }
            });
        }

        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', function() {
            generateCalendar();
            updateNavigation();
            
            // Auto-resize textarea
            document.addEventListener('input', function(e) {
                if (e.target.classList.contains('letter-text')) {
                    e.target.style.height = 'auto';
                    e.target.style.height = e.target.scrollHeight + 'px';
                }
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight' && currentPage < totalPages) {
                nextPage();
            } else if (e.key === 'ArrowLeft' && currentPage > 0) {
                previousPage();
            }
        });

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'994e3ab272489b1e',t:'MTc2MTUyNjU0MS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();