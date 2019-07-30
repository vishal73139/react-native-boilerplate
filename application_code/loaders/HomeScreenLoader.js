import React, {Fragment} from 'react';
import {View} from 'react-native';
import ContentLoader from 'react-native-content-loader';
import {Circle, Rect} from 'react-native-svg';

export const HomeScreenUpperSection = () => (
<View style={{height:'100%',width:'100%'}}>
	<View style={{height:'35%',width:'100%'}}>
	  <ContentLoader 
	   	height="100%"
	   	width="98%"
	    speed={1}
	    primaryColor="#f3f3f3"
	    secondaryColor="#ecebeb"
	  >
	  	<Rect x="15" y="12" rx="4" ry="4" width="95%" height="100%" />
	  </ContentLoader>
	</View>  
	<View style={{height:'65%',width:'100%'}}>	
	  <ContentLoader
	   	height="100%"
	   	width="98%"
	    speed={2}
	    primaryColor="#f3f3f3"
	    secondaryColor="#ecebeb"
	  >
	  	<Rect x="15" y="12" rx="4" ry="4" width="95%" height="100%" /> 
	  </ContentLoader>
	</View>   
 </View>
);