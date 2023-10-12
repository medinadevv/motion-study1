import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import AboutUs from "./Page/AboutUs/AboutUs";
import Study from "./Page/Study/Study";
import FlagCard from "./components/Flag/FlagCard";
import Other from './Page/Other';
import Items from './Page/Items';
import Artis from './Page/Artis';
import Country from './Page/Country'
import Footer from "./components/Footer/footer";
import HeroPage from "./components/HeroPage/HeroPage";
import {useEffect, useState} from "react";
import Britain from "./components/GreatBreatain/britain";
import German from "./components/Germany/german";
import Holland from "./components/Holland/Holland";
import Ireland from "./components/Ireland/Ireland";
import English from "./Page/Hero/English/English";
import Tabs from "./components/Tabs/Tabs";
import {LanguageProvider} from "./components/Lang/LanguageContext";
import Message from "./components/submit/submit";

function App() {
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 5000)
    }, [])
    return (
        <>
            {/*<Loading load={load}/>*/}


            <div style={{
                display: load ? 'none' : 'block'
            }}>
                <div className="App">
                   <LanguageProvider>
                       <Header/>
                       <Routes>
                           <Route path={'/'} element={<HeroPage/>}/>
                           <Route path={'/aboutUs'} element={<AboutUs/>}/>
                           <Route path={'/studyAbroad'} element={<Study/>}/>
                           <Route path={'/flag'} element={<FlagCard/>}/>
                           <Route path={'/America'} element={<Country/>}/>
                           <Route path={'/other'} element={<Other/>}/>
                           <Route path={'/ielts'} element={<Items/>}/>
                           <Route path={'/artis'} element={<Artis/>}/>
                           <Route path={'/Great Britain'} element={<Britain/>}/>
                           <Route path={'/germany'} element={<German/>}/>
                           <Route path={'/holland'} element={<Holland/>}/>
                           <Route path={'/ireland'} element={<Ireland/>}/>
                           <Route path={'/english'} element={<English/>}/>
                           <Route path={'/cambridge'} element={<English/>}/>
                           <Route path={'/tabs'} element={<Tabs/>}/>
                           <Route path={'/message'} element={<Message/>}/>
                       </Routes>
                       <Footer/>
                   </LanguageProvider>
                </div>
            </div>
        </>
    );
}

export default App;
