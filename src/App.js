
import { useEffect, useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
 
  const [githubUsername, setGitHubUsername] = useState();
  const [repoData, setRepoData] = useState();

  async function repoDataURL() {
    //Get repo data about github user
    await fetch("https://api.github.com/users/Kavita1603/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(36, result);
          const list = result.map((item) => (
            <div className="text-center">
              <a target="_blank" href={item.svn_url} rel="noreferrer">
                {item.name}
              </a>
            </div>
          ));
          setRepoData(list);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    fetch("https://api.github.com/users/Kavita1603")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          
          setGitHubUsername(result.login);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <>

    
     <div className="App">

         <h1 className="display-4 mb-3">GitHub Public Repositories with React JS</h1>
           <h3>Github Username: {githubUsername}</h3><br></br>

           <Button variant="primary" onClick={repoDataURL}>
             List of my public repos!
           </Button>

      
       </div><br></br>
       {repoData}

       <div className="App">
      <div className="container my-5" >
      
            <div className="row">
                
                <div className="col-md-6 mx-auto text-center">
                    <div className="row mb-5 justify-content-center">
                        <form id="myform" >
                          
                          <div id="main-div">
                          
                          < div id="d1">
                                <a href=" https://github.com/Kavita1603/BeeGitPro" target="_blank"><p>BeeGitPro App<span>Public</span>
                                <div class="js"><div class="circle3"></div>JavaScript</div></p></a><br></br>
                            </div>

                            <div id="d2">
                                <a href=" https://github.com/Kavita1603/Online-Order-Food-App" target="_blank"><p>Online Order Food App<span>Public</span>
                                  <div class="onf"><div class="circle4"></div>React</div></p></a><br></br>
                            </div>

                            <div id="d3">
                                <a href=" https://github.com/Kavita1603/react-complete-guide-code" target="_blank"><p>React Complete Guide Code<span>Public</span>
                                <div class="onf"><div class="circle4"></div>React</div></p></a><br></br>
                            </div>

                            <div id="d4">
                                <a href=" https://github.com/Kavita1603/Sigma-ToDoList" target="_blank" ><p>Sigma-To do List App<span>Public</span>
                                  <div class="js"><div class="circle3"></div>JavaScript</div></p></a><br></br>
                            </div>

                            <div id="d5">
                                <a href=" https://github.com/Kavita1603/To-DO-List" target="_blank" ><p>To Do List App<span>Public</span>
                                  <div class="js"><div class="circle3"></div>JavaScript</div></p></a><br></br>
                            </div>

                            <div id="d6">
                                <a href=" https://github.com/Kavita1603/Train-Ticket-Booking" target="_blank" ><p>Train Ticket Booking App<span>Public</span>
                                  <div class="html"><div class="circle2"></div>HTML</div></p></a><br></br>
                            </div>
                          </div>
                  
                        </form>                     
                    </div>       
                </div>
            </div>
        </div>
                        
    </div>
      </>
  );
}

export default App;
