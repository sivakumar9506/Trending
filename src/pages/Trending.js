import React, {  useState } from "react";
import { FaDesktop } from "react-icons/fa";
import { ImPacman } from "react-icons/im";
import { BsStar } from "react-icons/bs";

import { BiGitBranch } from "react-icons/bi";

// import axios from "axios";
// import githubTrends from 'github-trends-api';




const Trending = () => {
    const [userRepositories, setUserRepositories] = useState(
        [
            {
                "rank": 1,
                "username": "openai",
                "repositoryName": "whisper",
                "url": "https://github.com/openai/whisper",
                "description": null,
                "language": "Jupyter Notebook",
                "languageColor": "#DA5B0B",
                "totalStars": 6075,
                "forks": 322,
                "starsSince": 2306,
                "since": "daily",
                "builtBy": [
                    {
                        "username": "jongwook",
                        "url": "https://github.com/jongwook",
                        "avatar": "https://avatars.githubusercontent.com/u/266841?s=40&v=4"
                    },
                    {
                        "username": "drdaxxy",
                        "url": "https://github.com/drdaxxy",
                        "avatar": "https://avatars.githubusercontent.com/u/40321?s=40&v=4"
                    },
                    {
                        "username": "cool-RR",
                        "url": "https://github.com/cool-RR",
                        "avatar": "https://avatars.githubusercontent.com/u/56778?s=40&v=4"
                    },
                    {
                        "username": "gglanzani",
                        "url": "https://github.com/gglanzani",
                        "avatar": "https://avatars.githubusercontent.com/u/630284?s=40&v=4"
                    },
                    {
                        "username": "ldanilov",
                        "url": "https://github.com/ldanilov",
                        "avatar": "https://avatars.githubusercontent.com/u/1653257?s=40&v=4"
                    }
                ]
            },
            {
                "rank": 2,
                "username": "3xp0rt",
                "repositoryName": "LockBit-Black-Builder",
                "url": "https://github.com/3xp0rt/LockBit-Black-Builder",
                "description": null,
                "language": null,
                "languageColor": null,
                "totalStars": 251,
                "forks": 179,
                "starsSince": 69,
                "since": "daily",
                "builtBy": [
                    {
                        "username": "3xp0rt",
                        "url": "https://github.com/3xp0rt",
                        "avatar": "https://avatars.githubusercontent.com/u/61662492?s=40&v=4"
                    }
                ]
            },
            {
                "rank": 3,
                "username": "open-mmlab",
                "repositoryName": "mmyolo",
                "url": "https://github.com/open-mmlab/mmyolo",
                "description": "OpenMMLab YOLO series toolbox and benchmark",
                "language": "Python",
                "languageColor": "#3572A5",
                "totalStars": 408,
                "forks": 23,
                "starsSince": 168,
                "since": "daily",
                "builtBy": [
                    {
                        "username": "hhaAndroid",
                        "url": "https://github.com/hhaAndroid",
                        "avatar": "https://avatars.githubusercontent.com/u/17425982?s=40&v=4"
                    },
                    {
                        "username": "PeterH0323",
                        "url": "https://github.com/PeterH0323",
                        "avatar": "https://avatars.githubusercontent.com/u/25873202?s=40&v=4"
                    },
                    {
                        "username": "wanghonglie",
                        "url": "https://github.com/wanghonglie",
                        "avatar": "https://avatars.githubusercontent.com/u/33799979?s=40&v=4"
                    },
                    {
                        "username": "vansin",
                        "url": "https://github.com/vansin",
                        "avatar": "https://avatars.githubusercontent.com/u/25839884?s=40&v=4"
                    },
                    {
                        "username": "RangeKing",
                        "url": "https://github.com/RangeKing",
                        "avatar": "https://avatars.githubusercontent.com/u/27466624?s=40&v=4"
                    }
                ]
            }]
    )
    const [userDevelopers, setUserDevelopers] = useState(
        [
            {
                "rank": 1,
                "username": "benbjohnson",
                "name": "Ben Johnson",
                "url": "https://github.com/benbjohnson",
                "avatar": "https://avatars.githubusercontent.com/u/118015?s=96&v=4",
                "since": "daily",
                "popularRepository": {
                    "repositoryName": "litestream",
                    "description": null,
                    "url": "https://github.com/benbjohnson/litestream"
                }
            },
            {
                "rank": 2,
                "username": "azure-sdk",
                "name": "Azure SDK Bot",
                "url": "https://github.com/azure-sdk",
                "avatar": "https://avatars.githubusercontent.com/u/53356347?s=96&v=4",
                "since": "daily",
                "popularRepository": {
                    "repositoryName": "azure-sdk-for-android",
                    "description": null,
                    "url": "https://github.com/azure-sdk/azure-sdk-for-android"
                }
            },
            {
                "rank": 3,
                "username": "andrewlock",
                "name": "Andrew Lock",
                "url": "https://github.com/andrewlock",
                "avatar": "https://avatars.githubusercontent.com/u/18755388?s=96&v=4",
                "since": "daily",
                "popularRepository": {
                    "repositoryName": "NetEscapades.EnumGenerators",
                    "description": null,
                    "url": "https://github.com/andrewlock/NetEscapades.EnumGenerators"
                }
            },
            {
                "rank": 4,
                "username": "enisn",
                "name": "Enis Necipoglu",
                "url": "https://github.com/enisn",
                "avatar": "https://avatars.githubusercontent.com/u/23705418?s=96&v=4",
                "since": "daily",
                "popularRepository": {
                    "repositoryName": "UraniumUI",
                    "description": null,
                    "url": "https://github.com/enisn/UraniumUI"
                }
            }]
    )

    const [tabPane, setTabPane] = useState(1);


    // const getApiData = async () => {
    //   const response =  await fetch("https://gh-trending-api.herokuapp.com/repositories").then((response) => response.json());
    //     console.log(response)
    //     // update the state
       
    //      //setUserRepositories(response.data.userRepositories)

    //   };

    //   useEffect(() => {
    //     getApiData();
    //   }, []);


    return (
        <div style={{ backgroundColor: "black", color: "white", }}>
            <div style={{ textAlign: "center", borderBottom: "1px solid #696969 ",marginBottom:"29px" }}> <h4>Trending</h4>
                <p>These are the developers building the hot tools today </p>
            </div>
            <div className="container " >
                <div style={{ border: "1px solid #696969 ", borderRadius: "5px" }}>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{ borderBottom: "1px solid #696969 ", padding: "10px",backgroundColor: "#696969" }}>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={()=>setTabPane(1)} style={{color:"white"}}>Repositories</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={()=>setTabPane(2)} style={{color:"white"}}>Developers</button>
                    </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">



                    <div className="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                        {
                           tabPane ==1 && userRepositories && userRepositories.length > 0 && userRepositories.map((item, i) => {
                                return (
                                    <div style={{ borderBottom: "1px solid #696969 " , padding:"15px"}}>
                                    <div className="row " >
                                    <div className="col-10">
                                    <div key={i}>

                                        <div style={{color:"#007FFF",fontWeight: "bold", fontSize: "28px"}}><FaDesktop style={{ color: "white",width:"10px",height:"10px" ,marginLeft:"10px" }} />{item.username }/{item.repositoryName}  </div>
                                        <div style={{marginLeft:"10px"}}>{item.description}</div>
                                        <div >
                                            <span style={{marginLeft:"10px"}} >{item.language }</span>
                                            <span style={{marginLeft:"15px"}}>
                                                <BsStar/>{item.totalStars}</span>
                                           <span style={{marginLeft:"15px"}}><BiGitBranch/> {item.forks}</span>
                    
                                            <span style={{marginLeft:"15px"}}>builtBy  </span>
                                            {item.builtBy.map((element=>{

                                             return(
                                                <>
                                           <a  href={element.url}>
                                             <img src={element.avatar} style={{ width: "15px",height:"15px" , borderRadius:"10px",marginLeft:"1px" }} /></a>
                                             </>
                                              )
                                            }))}
                                            
                                        

                                        </div>
                                        </div>
                                        </div>
                                    <div className="col-2">

                                    <p    style={{ paddingLeft: "111px"}}> <span className="badge bg-secondary"  style={{borderRadius:"4px !important"}}><BsStar/>Star</span></p>
                                    <div style={{fontSize: "12px",paddingLeft: "59px"}}><BsStar/>{item.starsSince }   Stars Today</div>
                                  
                                    </div>
                                    </div>
                                    </div>
                                );
                            })}

                    </div>
                    <div>

                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            
                                {
                                  tabPane ==2 &&  userDevelopers && userDevelopers.length > 0 && userDevelopers.map((item, i) => {
                                        return (
                                            <div key={item.rank} >
                                                <div style={{  borderBottom: "1px solid #696969 " }}>
                                                <div className="row" style={{paddingTop:"10px"}}>
                                                    <div className="col-4 ">
                                                        <div className="row">
                                                            <div className="col-3 d-flex">
                                                      <span style={{marginLeft:"10px"}}>  {item.rank}</span>
                                                      <span style={{marginLeft:"10px"}}>  <img src={item.avatar} style={{ width: "49px",borderRadius:"50%"  }} /></span>
                                                     
                                                      
                                                      </div>
                                                      
                                                      <div className="col-9">
                                                      <div style={{marginLeft:"10px",color:"#007FFF"}}>  {item.name} </div> 
                                                        <div style={{fontSize:"12px",paddingLeft: "9px"}}> {item.username}</div>
                                                        </div>
                                                         </div>
                                                    </div>
                                                    <div className="col-4">
                                                  <span >  <ImPacman style={{ color: "#FF8C00" }} /><a style={{textDecoration: "none",color:"white"}} href={item.popularRepository.url}>POPOLLAR REPO</a> </span><br /> 
                                                  <span style={{color:"#007FFF"}}>   <FaDesktop style={{ color: "white" }} />  {item.popularRepository.repositoryName}</span><br />
                                                  <span>    {item.popularRepository.description}<br /></span>
                                                    </div>
                                                    <div className="col-4">
                                                    <p> <span className="badge bg-secondary"  style={{borderRadius:"4px !important",marginLeft:"259px"}}>Follow</span></p> </div>
                                                </div>
                                                </div>

                                            </div>
                                        );
                                    })}
                            
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Trending;