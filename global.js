{/* <div class="col-sm-3">
<div class="pictureHolder">
<img src="http://unsplash.it/200?random"  />
<div>
<span>Title of picture. It needs to have more words.</span><br />
<div class="row">
<div class="col-xs-6 text-muted">
  sellername
</div>
<div class="col-xs-6 text-right text-success">
  $55.00
 */}


 function createResults(item) {
     var col = document.createElement('div')
     col.className = 'col-sm-3'

     var  pictureHolder = document.createElement('div')
     pictureHolder.className = pictureHolder
     col.appendChild(card)

     var img = document.createElement('img')
     img.setAttribute('src', item.image)
     pictureHolder.appendChild(img)

     var span = document.createElement('span')
     span.innerHTML = item.title
     pictureHolder.appendChild(span)

     var row = document.createElement('div')
     row.className = 'row'
     pictureHolder.appendChild(row)

     var colLeft = document.createElement('div')
     colLeft.className = 'col-xs-6 text-muted'
     colLeft.innerHTML = item.seller
     row.appendChild(colLeft)

     var colRight = document.createElement('div')
     colLeft.className = 'col-xs-6 text-right text-success'
     colLeft.innerHTML = item.price
     row.appendChild(colRight)

     document.querySelector('#contentBox').appendChild(col)
 }

 function randomPrice() {
      return '$' + Math.round(Math.random() * 100) + '.00'
}

var items = [
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername'
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername'
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername'
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername'
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername'
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername'
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername'
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername'
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername'
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername'
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername'
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername'
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername'
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername'
          price: randomPrice()
     }
]

console.log(items)


function makeMorePics(picItems) {
     document.querySelector('#contentBox').innerHTML = ''

     picItems.forEach(function(item, i){
          item.title += i
          item.image += i
          item.seller += i
          createResults(item)
     })
}
