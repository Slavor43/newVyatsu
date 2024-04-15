import Chart from "./Chart"
import Header from "./Header"
import src from "../assets/vyatsuLogo.png"

const GraphPage = () =>{
    return <div style={{width: "100%"}}>
        <Header/>
        <div style={{display: "flex", alignItems: "center"}}>
            <Chart/>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", maxWidth: "200px", gap: "200px"}}>
            <img src={src} width={200} height={200}/>
            <h1 style={{color:"#000", margin: "0", textAlign: "center", whiteSpace: "nowrap", Width: "500px !important"}}>Ты молодец!!!</h1>
            </div>
        </div>
    </div>
}
export default GraphPage