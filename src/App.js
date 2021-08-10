import logo from './logo.svg';
import './App.css';
import HeaderTop from './component/HeaderTop';
import Header from './component/Header';
import FooterTop from './component/FooterTop';
import Footer from './component/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Product from './pages/Product';
import React, { useState, useEffect } from 'react';
import Manager from './component/Manager';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import ProductDetail from './pages/ProductDetail';
import Admin from './admin/Admin';
import Firebase from './firebase';
import Logins from './account/Logins';
import Cart from './component/Cart';
import _, { slice } from 'lodash';

function App() {

  const [albums,setAlbums] = useState([]);
  const [catepro, setCatepro] = useState([]);
  const [cate ,setCate] = useState([]);
  const [user ,setUser] = useState([]);
  const [search ,setSearch] = useState("");
  const [cart,setCart] = useState([]);
  const [order,setOrder] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  useEffect(() => {
    const getAlbums = async () =>{
    try{
      const response =await fetch(`http://localhost:3007/products`)
      const data = await response.json();
      // console.log(data)
      setAlbums(data)
      // console.log(albums)

    } catch(error){
      console.log(error)
    }
  }
  getAlbums();
  },[]);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let tem = [];
  const currentPosts = albums.slice(indexOfFirstPost, indexOfLastPost);
  const nextpage = (pageNumber) => setCurrentPage(pageNumber);
  
  const currentPostsss = catepro.slice(indexOfFirstPost, indexOfLastPost);
  const nextpagess = (pageNumber) => setCurrentPage(pageNumber);
    useEffect(() =>{
      const getCart = async () =>{
        try {
          const carttt = await fetch(`http://localhost:3007/cart`)
          const oks = await carttt.json();
          setCart(oks)
        } catch (error) {
          console.log(error)
        }
      }
      getCart();
      },[]);
    useEffect(() =>{
    const getCate = async () =>{
      try {
        const ketqua = await fetch(`http://localhost:3007/category`)
        const ok = await ketqua.json();
        setCate(ok)
      } catch (error) {
        console.log(error)
      }
    }
    getCate();
    },[]);
    useEffect(() =>{
      const getUser = async () =>{
        try {
          const response = await fetch(`http://localhost:3007/user`)
          const data = await response.json();
          setUser(data)
        } catch (error) {
          console.log(error)
        }
      }
      getUser();
      },[]);
    const goSearch = (value) => {
      setSearch(value)
    }
    tem = _.filter(albums, (item) => {
        return _.includes(item.name, search)
    })
    
    const currentPostss = tem.slice(indexOfFirstPost, indexOfLastPost);
    const nextpages = (pageNumber) => setCurrentPage(pageNumber);
    const handleCatePro = (id) => {
      const filterCateID = albums.filter(ad => ad.categoryId == id);
      setCatepro(filterCateID);
    }
    const allProduct = (e) =>{
      setCatepro(albums)
      console.log(albums)
      
      e.preventDefault()
    }
    const addOrder = async (order) => {
      // console.log("ok")
      try{
        const response = await fetch(`http://localhost:3007/order`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(order)
        });
        const data = await response.json();
        setOrder([...order, data]);
        
      } catch(error){
        console.log(error)
      }
    }
    const addToCart = async (id) => {
      const check = cart.map(item => {
        return (item.id !== +id.id)
      });
      if(check){
        try{
          const response = await fetch(`http://localhost:3007/cart`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(id, id.quantity=1)
          });
          const data = await response.json();
          setCart([...cart, data]);
        } catch(error){
          console.log(error)
        }
      }else{
        alert("The product has been added to cart")
      }
      
      
    }
    const reduction  = (index) => {
      const currentPro = cart[index];
      setCart([...cart.slice(0, index), 
              {...currentPro, quantity: currentPro.quantity === 1 ? 
                                        currentPro.quantity =1 : 
                                        currentPro.quantity -=1 },
               ...cart.slice(index+1, cart.length)])
    }
    const increase = (index) => {
      const currentPro = cart[index];
      setCart([...cart.slice(0, index), {...currentPro, quantity: currentPro.quantity +1 }, ...cart.slice(index+1, cart.length)])
    slice()
    }
    const removeCart = async (id) => {
      if(window.confirm("Bạn có muốn xóa sản phẩm không")){
        try {
          await fetch(`http://localhost:3007/cart/${id}`,{
            method: 'DELETE'
          });
        } catch (error) {
          console.log(error)
        }
        const newCart = cart.filter((product) => product.id !==id)
        setCart(newCart)
      }
      
    }
    const handleAddUser = async (users) =>{
     
      try{
        const response =await fetch(`http://localhost:3007/user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(users)
        });
        const data = await response.json();
        setUser([
          ...user,
          data
        ]);
      } catch(error){
        console.log(error)
      }
    }
    const handleUpdateUser = async (album) =>{ 
      try {
        await fetch(`http://localhost:3007/user/${album.id}`,{
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(album)      
        })
        const newUser = user.map(pro => (pro.id === +album.id ? album : pro));
        // console.log(newAlbumbs)
        setUser (newUser)
      } catch (error) {
        console.log(error)
      }
    }
    const hanleDeleteUser = async (id) =>{
      if(window.confirm("Bạn có muốn xóa sản phẩm không")){
      try {
        await fetch(`http://localhost:3007/user/${id}`,{
          method: 'DELETE'
        });
      } catch (error) {
        console.log(error)
      }
      // console.log(id);
      const newUser = user.filter(ad => ad.id !== id);
      console.log(user.filter(ad => ad.id !== id));
      setUser(newUser);
    }
    }
    const onHandleDelete = async (id) =>{
      if(window.confirm("Bạn có muốn xóa sản phẩm này không")){
      try {
        await fetch(`http://localhost:3007/products/${id}`,{
          method: 'DELETE'
        });
      } catch (error) {
        console.log(error)
      }
      // console.log(id);
      const newAblum = albums.filter(item => item.id !== id);
      // console.log(newAblum);
      setAlbums(newAblum);
    }
    }
    const handleAdd = async (album) =>{

      try{
        const response =await fetch(`http://localhost:3007/products`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(album)
        });
        const data = await response.json();
        setAlbums([
          ...albums,
          data
        ]);
      } catch(error){
        console.log(error)
      }
    }
    const onHandleUpdate = async (album) =>{
      try {
        await fetch(`http://localhost:3007/products/${album.id}`,{
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(album)      
        })
        const newAlbumbs = albums.map(pro => (pro.id === album.id ? album : pro));
        // console.log(newAlbumbs)
        setAlbums (newAlbumbs)
      } catch (error) {
        console.log(error)
      }
    }
    const onHandelDeleteCategory = async (id)=>{
      if(window.confirm("Bạn có muốn xóa danh mục này không")){
        try {
          await fetch(`http://localhost:3007/category/${id}`,{
            method: "DELETE",
          })
        }
        catch(error){
        console.log(error)
        } 
        const newCate = cate.filter(item => item.id !== id);
        // console.log(newCate);
        setCate(newCate);
      }
    }
    const handleAddCategory = async (cates) =>{

      try{
        const response =await fetch(`http://localhost:3007/category`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(cates)
        });
        const data = await response.json();
        setCate([
          ...cate,
          data
        ]);
      } catch(error){
        console.log(error)
      }
    }
    const onHandleUpdateCategory = async (album) =>{
      try {
        await fetch(`http://localhost:3007/category/${album.id}`,{
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(album)      
        })
        const newCate = cate.map(pro => (pro.id === album.id ? album : pro));
        // console.log(newAlbumbs)
        setCate (newCate)
      } catch (error) {
        console.log(error)
      }
    }
    
  return (
        <Router>
          <div>      
            <Switch>
              <Route path="/admin" exact component={()=><Admin sanpham={currentPosts} 
                                                                cate={cate} 
                                                                albums={albums}
                                                                user={user}
                                                                onAdd={handleAdd} 
                                                                onUpdateProduct={onHandleUpdate} 
                                                                onDelete={onHandleDelete}
                                                                onDeleteCategory ={onHandelDeleteCategory}
                                                                onAddCategory={handleAddCategory}
                                                                onUpdate={onHandleUpdateCategory}
                                                                handleAddUser={handleAddUser}
                                                                handleUpdateUser={handleUpdateUser}
                                                                hanleDeleteUser={hanleDeleteUser}
                                                                timkem={goSearch}
                                                                search={search}
                                                                />}>
              </Route>
              <Route path="/" >
                <HeaderTop/>
                <Header user={user} cart={cart} timkem={goSearch} 
                  />
                <main>
                  <Switch>
                    <Route path="/" exact component={()=><HomePage temm={tem.length}
                                                                  search={search}
                                                                  sanpham={currentPostss}
                                                                  nextpages={nextpages}
                                                                  postsPerPage={postsPerPage} 
                                                                  addToCart={addToCart} 
                                                                  />} />
                    <Route path="/product" exact component={()=><Product product={currentPosts} 
                                                                        sanpham={currentPostss}
                                                                        catepro={currentPostsss}
                                                                        cate={cate}
                                                                        allProduct={allProduct}
                                                                        search={search}
                                                                        albums={albums}
                                                                        addToCart={addToCart} 
                                                                        postsPerPage={postsPerPage} 
                                                                        totalPosts={albums.length}
                                                                        timm={catepro.length}
                                                                        temm={tem.length}
                                                                        nextpage={nextpage}
                                                                        nextpages={nextpages}
                                                                        nextpagess={nextpagess}
                                                                        handleProCate={handleCatePro}
                                                                        />} />
                    <Route path="/product/detail/:id" exact component={()=><ProductDetail product={albums}
                                                                                          addToCart={addToCart} 
                                                                                          />} />
                    <Route path="/cart" exact component={()=><Cart cart={cart} 
                                                                  removeCart={removeCart} 
                                                                  tru={reduction} 
                                                                  cong ={increase} 
                                                                  addToOrder={addOrder}
                                                                  />} />
                    {/* <Route path="/manager" exact component={()=><Manager>} /> login={login} error={error}/ */}
                  </Switch>
                </main>
                <FooterTop/>
                <Footer/>
              </Route>
            </Switch>   
          </div>
        </Router>
  );
}

export default App;
