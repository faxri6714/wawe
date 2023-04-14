let doc = document
let body = document.body
let warp = body.children[0]
let hed = warp.children[0]
let div = hed.children[0]
let a = div.children[1]
let a1 = div.children[2]
let a2 = div.children[3]
let a3 = div.children[4]
let a4 = div.children[5]
let a5 = div.children[6]


hed.style.width = '100%'
hed.style.height ='100px'
hed.style.display = 'flex'
hed.style.alignItems = 'center'
hed.style.justifyContent = 'center'
hed.style.position = 'fixed'



div.style.width= '1000px'
div.style.height= '100px'
div.style.display= 'flex'
div.style.alignItems= 'center'
div.style.justifyContent= 'space-around'

a.style.fontSize= '24px'
a.style.color= 'white'
a.style.fontWeight= '400'

a1.style.fontSize= '24px'
a1.style.color= 'white'
a1.style.fontWeight= '400'

a2.style.fontSize= '24px'
a2.style.color= 'white'
a2.style.fontWeight= '400'

a3.style.fontSize= '24px'
a3.style.color= 'white'
a3.style.fontWeight= '400'

a4.style.fontSize= '24px'
a4.style.color= 'white'
a4.style.fontWeight= '400'

a5.style.fontSize= '24px'
a5.style.color= 'white'
a6.style.fontWeight= '400'

console.log(hed); 
