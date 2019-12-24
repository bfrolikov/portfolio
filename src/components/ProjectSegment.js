import React from 'react'
import {Segment,Image,Header} from 'semantic-ui-react'

const ProjectSegment = ({src,name,desc,mobile})=>{
  return(
    <Segment.Group style={{marginBottom:35}} raised>
      <Segment style={{padding:0.1}}>
        <Image  style={{width:'100%',height:'auto'}}src={src}/>
      </Segment>
      <Segment style={{paddingLeft:25,paddingBottom:15}}>
        <Header style={{marginBottom:5,fontSize:mobile? '1.4em':'1.6em'}}>{name}</Header>
        <p style={{maxWidth:700,fontSize:mobile? '1.35em':'1.5em'}}>{desc}</p>
      </Segment>
    </Segment.Group>
  )
}

export default ProjectSegment