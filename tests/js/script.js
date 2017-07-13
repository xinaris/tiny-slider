// import { tns } from '../../src/tiny-slider';

var doc = document,
    sliders = {},
    speed = 100,
    edgepadding = 50,
    gutter = 10,
    options= {
      'base': {
        container: '',
        items: 3,
        slideBy: 'page',
      },
      'mouse-drag': {
        container: '',
        items: 3,
        mouseDrag: true,
        slideBy: 'page',
      },
      'gutter': {
        container: '',
        items: 3,
        gutter: gutter,
      },
      'edgePadding': {
        container: '',
        items: 3,
        edgePadding: edgepadding,
      },
      'edgePadding-gutter': {
        container: '',
        items: 3,
        gutter: gutter,
        edgePadding: edgepadding,
      },
      'non-loop': {
        container: '',
        items: 3,
        loop: false,
      }, 
      'rewind': {
        container: '',
        items: 3,
        rewind: true,
      }, 
      'slide-by-page': {
        container: '',
        items: 3,
        slideBy: 'page',
      }, 
      'fixedWidth': {
        container: '',
        fixedWidth: 300,
      }, 
      'fixedWidth-gutter': {
        container: '',
        gutter: gutter,
        fixedWidth: 300,
      }, 
      'fixedWidth-edgePadding': {
        container: '',
        edgePadding: edgepadding,
        fixedWidth: 300,
      }, 
      'fixedWidth-edgePadding-gutter': {
        container: '',
        gutter: gutter,
        edgePadding: edgepadding,
        fixedWidth: 300,
      }, 
      'responsive': {
        container: '',
        responsive: {
          container: '',
          600: 2,
          900: 3,
        },
        slideBy: 'page',
      }, 
      'arrowKeys': {
        container: '',
        items: 3,
        arrowKeys: true,
      },
      'autoplay': {
        container: '',
        items: 3,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: speed * 9,
        autoplayText: ['▶', '❚❚'],
      }, 
      'vertical': {
        container: '',
        items: 3,
        axis: 'vertical',
      }, 
      'vertical-gutter': {
        container: '',
        items: 3,
        axis: 'vertical',
        gutter: gutter,
      }, 
      'vertical-edgePadding': {
        container: '',
        items: 3,
        axis: 'vertical',
        edgePadding: edgepadding,
      }, 
      'vertical-edgePadding-gutter': {
        container: '',
        items: 3,
        axis: 'vertical',
        gutter: gutter,
        edgePadding: edgepadding,
      }, 
      'animation': {
        container: '',
        mode: 'gallery',
        items: 2,
        arrowKeys: true,
        animateIn: 'jello',
        animateOut: 'rollOut',
        animateDelay: speed * 2,
        speed: speed * 10,
      },
      'lazyload': {
        container: '',
        items: 3,
        edgePadding: 40,
        lazyload: true,
        onInit: function (info) {
          // console.log(info.items);
        },
      },
      'customize': {
        container: '',
        items: 3,
        controlsContainer: doc.querySelector('#customize-controls'),
        navContainer: doc.querySelector('#customize-thumbnails'),
        autoplay: true,
        autoplayButton: doc.querySelector('#customize-toggle'),
      },
      'autoHeight': {
        container: '',
        autoHeight: true,
        items: 1,
      }
    };

for (var i in options) {
  var item = options[i];
  item.container = doc.querySelector('#' + i);
  if (!item.speed) { item.speed = speed; }
  sliders[i] = tns(options[i]);
  // sliders[i].destroy();

  // insert code
  doc.querySelector('#' + i + '_wrapper').insertAdjacentHTML('beforeend', '<pre><code class="language-javascript">' + JSON.stringify(item, function (key, value) {
    if (typeof value === 'object') {
      if (value.id) {
        return "document.querySelector('#" + value.id + "')";
      }
    }
    return value;
  }, '  ') + '</code></pre>');
}

// tns().events.on('initilized', function(info) {
//   console.log(info.container.id);
// });
// console.log(lazyloadS.events === customizeS.events);
// lazyloadS.events.on('transitionEnd', function(info) {
//   console.log(info.container.id);
// });

// tns().events.on('transitionEnd', function(info) {
//   if (info.container.id === 'base') {
//     console.log(e.type, info.container.id);
//   }
// });

// document.querySelector('.responsive_wrapper [data-controls="next"]').addEventListener('click', function () {
//   var info = responsiveSD.getInfo();
//   alert(info.indexCached + ' : ' + info.index);
// }, false);

