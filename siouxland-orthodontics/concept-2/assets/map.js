/* Locations map (Jul 27 call): four clickable pins with addresses.
   Hovering a pin names the office and lights up its card below; hovering a
   card works the other way round. Click opens the full details popup.
   TODO before launch: verify each lat/lng against Google Maps (approximated
   from the street addresses). */
(function () {
  var el = document.getElementById('loc-map');
  if (!el || typeof L === 'undefined') return;

  var LOCS = [
    { name: 'Morningside', page: 'location-morningside.html', address: '4224 Sergeant Rd, Sioux City, IA 51106', phone: '(712) 276-2766', tel: '+17122762766', color: '#6B3F82', lat: 42.4593, lng: -96.3560 },
    { name: 'Leeds', page: 'location-leeds.html', address: '2801 Outer Dr N, Sioux City, IA 51104', phone: '(712) 239-0420', tel: '+17122390420', color: '#415B2F', lat: 42.5433, lng: -96.3695 },
    { name: 'Le Mars', page: 'location-lemars.html', address: '405 Plymouth St NW, Le Mars, IA 51031', phone: '(712) 546-5179', tel: '+17125465179', color: '#A42C42', lat: 42.7940, lng: -96.1690 },
    { name: 'Wayne', page: 'location-wayne.html', address: '617 Pearl St Ste #2, Wayne, NE 68787', phone: '(402) 833-1333', tel: '+14028331333', color: '#4270AF', lat: 42.2296, lng: -97.0181 }
  ];

  var map = L.map(el, { scrollWheelZoom: false });
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  function cardFor(page) {
    var link = document.querySelector('.offices a[href="' + page + '"]');
    return link ? link.closest('.office') : null;
  }

  LOCS.forEach(function (l) {
    var marker = L.circleMarker([l.lat, l.lng], {
      radius: 10, color: '#1A1C22', weight: 2, fillColor: l.color, fillOpacity: 1
    }).addTo(map);

    marker.bindTooltip(l.name, {
      direction: 'top', offset: [0, -12], className: 'office-tip', opacity: 1
    });
    marker.bindPopup('<b>' + l.name + '</b><br>' + l.address +
      '<br><a href="tel:' + l.tel + '">' + l.phone + '</a>' +
      '<br><a href="' + l.page + '">Visit this office &rarr;</a>');

    var card = cardFor(l.page);

    function lift() {
      marker.setStyle({ radius: 14, weight: 3 });
      marker.openTooltip();
      if (card) card.classList.add('is-hot');
    }
    function settle() {
      marker.setStyle({ radius: 10, weight: 2 });
      marker.closeTooltip();
      if (card) card.classList.remove('is-hot');
    }

    marker.on('mouseover', lift);
    marker.on('mouseout', settle);
    if (card) {
      card.addEventListener('mouseenter', lift);
      card.addEventListener('mouseleave', settle);
    }
  });

  map.fitBounds(LOCS.map(function (l) { return [l.lat, l.lng]; }), { padding: [40, 40] });
})();
