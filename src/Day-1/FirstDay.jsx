const Detail = {
  name: "Deer",
  img: "/deer.jpeg",
  imageSize: 90,
};

 const Fun = () => {
        return (
                <>
                        <p>{ Detail.name}</p>
                        <img src={Detail.img} alt="DeerImage" style={{ width: Detail.imageSize ,height: Detail.imageSize, borderRadius: '50%' }} />
                        
                </>
        )
}
export default Fun






// import Img from "../assets/deer.jpeg";
// function First() {
//         const name= 'Selina'
//         return (
//                 <div>
//                         <p>Hello {name}</p>
//                         <img src="/deer.jpeg" alt="animal" />
//                         <img src={Img} alt="deer" />
//                 </div>
//         )
// }

// export default First;