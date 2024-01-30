const domReact = document.querySelector('#root');

const domElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to vist google'
}

function customRender(domElement, mainContainer)
{
    /* this code is not optimize code but it work properly 

    const customDomElement = document.createElement(domElement.type)
    customDomElement.innerHTML = domElement.children
    customDomElement.setAttribute('href', domElement.props.href)
    customDomElement.setAttribute('target', domElement.props.target)
    mainContainer.appendChild(customDomElement)
    */ 
   
    const customDomElement = document.createElement(domElement.type)
    customDomElement.innerHTML = domElement.children
    for (const prop in domElement.props) {
        if(prop === 'children')
        {
            customDomElement.setAttribute(prop, domElement.props[prop])
        }
    }
    mainContainer.appendChild(customDomElement)
}
customRender(domElement, domReact)