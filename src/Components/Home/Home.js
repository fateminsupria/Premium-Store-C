
import React from 'react';
import { Route , useHistory} from 'react-router';
import './Home.css';

const Home = () => {
    const history = useHistory()
	const handleSignIn = () =>{
   history.push('/Login');
	}
    return (
        <Route> 
        <h1 className="text-primary" style={{textAlign: 'center'}}><strong>Premium Store</strong></h1> 
        <div style={{ color:'green'}} className="container">
   <div className="row">
<div className="col-sm"><div class="card" >
<img src="https://i.ibb.co/9Zz2K76/image-32.png" class="card-img-top" alt="..." height="300px"/>
<div class="card-body">
<h5 class="card-title">Milk</h5>
<p class="card-text">$5 </p>
<button href=" # " class="btn btn-primary" onClick={handleSignIn}>Buy now</button>
</div>
</div>
</div>
<div className="col-sm"> <div class="card" >
<img src="https://i.ibb.co/3W36DsC/image-34.png" class="card-img-top" alt="..." height="300px"/>
<div class="card-body">
<h5 class="card-title">Onion</h5>
<p class="card-text">$4</p>
<button href=" # " class="btn btn-primary" onClick={handleSignIn}> Buy now</button>
</div>
</div>
</div>
<div className="col-sm"> <div class="card" >
<img src="https://i.ibb.co/6NPfvQW/image-40.png" class="card-img-top" alt="..." height="300px"/>
<div class="card-body">
<h5 class="card-title">Hair oil</h5>
<p class="card-text">$10 </p>
<button href=" #" class="btn btn-primary" onClick={handleSignIn}>Buy now</button>
</div>
</div>
</div>
<div className="col-sm"><div class="card" >
<img src="https://i.ibb.co/PG7fH48/image-38.png" class="card-img-top" alt="..." height="300px"/>
<div class="card-body">
<h5 class="card-title">LifeBuoy</h5>
<p class="card-text">$20 </p>
<button href=" # " class="btn btn-primary" onClick={handleSignIn}>Buy now</button>
</div>
</div>
</div>
</div>
</div>
    </Route>




);
};

export default Home;