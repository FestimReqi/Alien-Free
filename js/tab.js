// // Initially hide all tabs except the first one
// $('#tabs .tab:not(:first)').hide();

// // Next Tab Button Click Event
// $('#next-tab').click(function() {
//   // Find the currently active tab
//   var currentTab = $('#tabs .tab:visible');
//   // Find the next tab
//   var nextTab = currentTab.next('.tab');
//   // If there is no next tab, go back to the first tab
//   if (nextTab.length == 0) {
//     nextTab = $('#tabs .tab:first');
//   }
//   // Hide the current tab and show the next tab
//   currentTab.hide();
//   nextTab.show();
// });

// // Previous Tab Button Click Event
// $('#prev-tab').click(function() {
//   // Find the currently active tab
//   var currentTab = $('#tabs .tab:visible');
//   // Find the previous tab
//   var prevTab = currentTab.prev('.tab');
//   // If there is no previous tab, go to the last tab
//   if (prevTab.length == 0) {
//     prevTab = $('#tabs .tab:last');
//   }
//   // Hide the current tab and show the previous tab
//   currentTab.hide();
//   prevTab.show();
// });



const tabs = document.querySelectorAll('[data-tab-value]')
        const tabInfos = document.querySelectorAll('[data-tab-info]')
  
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document
                    .querySelector(tab.dataset.tabValue);
  
                tabInfos.forEach(tabInfo => {
                    tabInfo.classList.remove('active')
                })
                target.classList.add('active');
            })
        })