import React from 'react';

class HomePage extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: 0,
         pageName: 'Popular Titles',
         loadingJSON: false,
         showErrorMessage: false,
         JSONLoadingFinished: false,
         currentJSONName: '',
         loadErrorMessage: '',
         jsonMsg:'',
         jsonData:[],
         jsonSortedData:[]         
      }
      
      this.loadPopularSeriesJSON = this.loadPopularSeriesJSON.bind(this);
      this.loadPopularMoviesJSON = this.loadPopularMoviesJSON.bind(this);

   };


   loadPopularSeriesJSON()
   {
        this.setState({loadingJSON: true});

        fetch('http://localhost:3000/feed/sample.json')
            .then(response => {
                this.setState({ loadingJSON: false });

                if (response.status >= 400) {

                    this.setState({ showErrorMessage: true });

                }
                else{

                return response.json();
                }
            })
            .then(data => {

                this.setState({jsonData: data.entries});
                

                console.log([].concat(this.state.jsonData)[0].images['Poster Art'].url)

                const myData = [].concat(this.state.jsonData).filter( a => a.releaseYear >= 2010 && a.programType == 'series')

                    .sort((function(a, b){
                        var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase();
                        if (nameA < nameB) 
                            return -1;
                        if (nameA > nameB)
                            return 1;
                        return 0; 
                    }))
                    .map((item, i) => 
                        <div key={i} className="titleAndimage"> 

                                 <div className="imgdiv">
                                      <img src={item.images['Poster Art'].url} className="movieseriesimage"/>  
                                 </div>
                                 <div className="titlediv">
                                        {item.title.length > 15?(
                                            <div>
                                                {item.title.substring(0,15).concat('...')}

                                             </div>   
                                        ):(
                                            <div>
                                                {item.title.substring(0,15)}
                                             </div>   
                                        )

                                        }

                                 </div>    

                        </div>
                    )
                    .slice(0,21).reverse();

                this.setState({jsonSortedData: myData});

                console.log(this.state.jsonSortedData);
                this.setState({pageName: 'Popular Series'});

                this.setState({ JSONLoadingFinished: true });

            });

   }

   loadPopularMoviesJSON()
   {
        this.setState({loadingJSON: true});
        
        fetch('http://localhost:3000/feed/sample.json')
            .then(response => {
                this.setState({ loadingJSON: false });

                if (response.status >= 400) {

                    this.setState({ showErrorMessage: true });

                }
                else{

                return response.json();
                }
            })
            .then(data => {


                this.setState({jsonData: data.entries});

                console.log([].concat(this.state.jsonData)[0].images['Poster Art'].url)

                const myData = [].concat(this.state.jsonData).filter( a => a.releaseYear >= 2010 && a.programType == 'movie')

                    .sort((function(a, b){
                        var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase();
                        if (nameA < nameB) 
                            return -1;
                        if (nameA > nameB)
                            return 1;
                        return 0; 
                    }))
                    .map((item, i) => 
                       <div key={i} className="titleAndimage"> 

                                 <div className="imgdiv">
                                      <img src={item.images['Poster Art'].url} className="movieseriesimage"/>  
                                 </div>
                                 <div className="titlediv">
                                        {item.title.length > 15?(
                                            <div>
                                                {item.title.substring(0,20).concat('...')}

                                             </div>   
                                        ):(
                                            <div>
                                                {item.title.substring(0,20)}
                                             </div>   
                                        )

                                        }

                                 </div>    

                        </div>
                    )
                    .slice(0,21).reverse();

                this.setState({jsonSortedData: myData});

                console.log(this.state.jsonSortedData);

                this.setState({pageName: 'Popular Movies'});


                this.setState({ JSONLoadingFinished: true });

            });
   }

   render() {
      return (


         <div >

            <div className="headerElements">
                <div className="headerInnerLeft">
                    DEMO STREAMING
                </div>

                <a href="" className="headerInnerMiddle">Log In</a>

                <a href="" className="freetrial">start your free trial</a>

            </div>

            <div className="pageTitlebar">
                <div className="pageTitlebarInner">
                    {this.state.pageName}
                </div>
            </div>

            <div className="centerArea">
              <div className="centerAreaInner">

                    {this.state.loadingJSON == false && this.state.showErrorMessage == false && this.state.JSONLoadingFinished == false?(
                    <div className="centerButtonArea">    

                        <div className="titles" onClick={this.loadPopularSeriesJSON}>
                            <div className="titlesimgdiv">
                                SERIES
                            </div>
                            <div className="titlesdiv">
                                Popular Series
                            </div>                     

                        </div>    

                        <div className="titles" onClick={this.loadPopularMoviesJSON}>
                            <div className="titlesimgdiv">
                                    MOVIES
                            </div>
                            <div className="titlesdiv">
                                Movies
                            </div>  

                        </div>   
                    </div>

                    ):
                    (
                    <div>
                    {    
                    this.state.showErrorMessage == false && this.state.JSONLoadingFinished == false ?(
                        <div>
                            loading...
                        </div>
                    ):(
                    

                    <div>
                    {    this.state.showErrorMessage == true ?
                    (
                        <div>
                            oops something went wrong...
                        </div>
                    ) :
                    (
                        <div>
                        </div>
                    )
                    }
                    </div>       
                    )
                    }
                    </div>
                    
                    )
                    
                    }           

                    
                    {this.state.JSONLoadingFinished == true? 
                    (
                        <div className="listArea">
                            {this.state.jsonSortedData} 
                        </div>
                    ):
                    (
                        <div>
                        </div>
                    )
                    }
            </div>
            </div>


            <div className="links">
                 <div className="linksInner">
                     <a herf="">Home</a> |
                     <a herf=""> Terms and Conditions</a> |
                     <a herf=""> Privacy Policy</a> |
                     <a herf=""> Collection Statement</a> |
                     <a herf=""> Help</a> |
                     <a herf=""> Manage Account</a>
                     <p>Copyright @ 2016 DEMO Streaming All Rights Reserved</p>
                </div>     
            </div>

             <div className="socials">
                <div className="socialsInner">
                    <div className="socialLinks">
                        <div className="socialfacebook">
                        </div>
                        <div className="socialtwitter">
                        </div>
                        <div className="socialinstagram">
                        </div>        
                    </div><div className="storeLinks">
                        <div>
                            <div className="appStore">
                            </div>
                            <div className="playStore">
                            </div>     
                            <div className="windowsStore">
                            </div> 
                        </div>                             

                    </div>
                </div>
            </div> 
            
        </div>
      );
   }
}

export default HomePage;
