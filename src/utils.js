export const parseRequestUrl = ()=>{
    const url = window.location.hash.toLowerCase();
    const request = url.split("/")
    return {
        resource: request[1],
        id: request[2],
        action: request[3]

    }
    
}
export const $ = (selector) => {
    let elements = document.querySelectorAll(selector);
 //   console.log(elements[0]);
    return elements.length == 1 ? elements[0] : [...elements];
};

export const reRender = async (component , position = "" ) => {
    if (position) {
        $(position).innerHTML = await component.render();
    } else {
    $('#root').innerHTML = await component.render();
    }
    await component.afterRender();
};
// export const isAdmin = async() => {
//     const userlocal = localStorage.getItem('user');
//     const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
//     const { id } = JSON.parse(userlocal)
//     console.log(id)
//     if( id ) {
//         const {data} =  await UserAPI.profile(token, id)
//         return data;
//     }
    
//  };