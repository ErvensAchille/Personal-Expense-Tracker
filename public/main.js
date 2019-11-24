var trash = document.getElementsByClassName("trash");
var button1 = document.getElementsByClassName("button1")
var price = document.getElementsByClassName("price")
var calculate = document.getElementById("calculate")
var total = document.getElementsByClassName("total")
// Array.from(button1).forEach(function(element) {
//       element.addEventListener('click', function(){
//
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const price = this.parentNode.parentNode.childNodes[3].innerText
//         const date = this.parentNode.parentNode.childNodes[5].innerText
//
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'price': price,
//             'date':date
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           // window.location.reload(true)
//         })
//       });
// });

calculate.addEventListener('click', function(){
   fetch("/getPriceTotal")
   .then(res => res.json())
   .then(response => {
     results.textContent = `$: ${response.totalPrice}`
   })
   .catch(err => console.log(err))
      // results.innerHTML = total
  })

 // calculate.addEventListener('click', function(){
 //
 //   var totalPrice = document.getElementsByClassName("total")
 //
 //          var total = 0
 //
 //           Array.from(totalPrice).forEach(function(element) {
 //
 //            // var arr = []
 //
 //
 //
 //          total = total + Number(element.innerText.substring(1))
 //
 //            //
 //            // arr.push(element.innerText.substring(1))
 //            // console.log("total" array1.reduce(reducer))
 //
 //            console.log("price", Number(element.innerText.substring(1)))
 //
 //
 //
 //
 //           })
 //
 //           console.log("prices", total)
 //
 //           var results = document.getElementById("results")
 //           results.innerHTML = "$" + total
 //  })
 //



// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });
// Array.from(thumbDown).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messagesAlt', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const price = this.parentNode.parentNode.childNodes[3].innerText
        const date = this.parentNode.parentNode.childNodes[5].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'price': price,
            'date':date
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
