import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import './App.css';
import Card from '../components/Card/Card.js'
import React from 'react'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}


const FeatureListTop = [
  {
    title: '180+',
    description: (
      <div className={styles.colorCodeBlack}>
       <p >Wellmed OGA India Members</p>
      </div>
    ),
  },
  {
    
    title: '13',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      <p>India Agile Teams</p>
      </>
    ),
  },
  {
    title: '9',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <p>Engineering Account Teams</p>
      </>
    ),
  },
  {
    title: '65%',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       <p>Software Engineers</p>
      </>
    ),
  },
  {
    title: '45+',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <p>Azure Certified Members</p>
      </>
    ),
  }
];


function Feature({Svg, title, description}) {
  return (
    <div  className={clsx('col')}>
      <div className="text--center" >
        <h3 style={{textAlign: 'center', fontSize: '2.5rem'}}>{title}</h3>
        <p style={{textAlign: 'center', fontSize: '1.25rem'}}>{description}</p>
      </div>
    </div>
  );
}



export default function Home() {

 

  const img1 = "https://images.axios.com/YFl4sf9FyNLBGDs4dSr7FnhzksE=/0x0:5070x2852/1920x1080/2019/02/22/1550863037060.jpg"
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <br />
      <br />

          <div  className="container">
            <div className="row">
              {FeatureListTop.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>

      <main>
        <HomepageFeatures />
      </main>
      <br /><br /><br /><br />
  
  <div className="container" >

<br /><br />
      <div className="text--center" >
          <h1 className={styles.blueColorFont}>Organization Chart</h1>
      </div>

          <div style={{marginLeft: '522px', marginTop: '50px'}} sx={{mx:20}} className="row">
      <div style={{marginLeft: '20px'}}>
        <Card name={"Shashank Rastogi"} job={"Sr Mgr Software Engineering"}  image={img1}/>
      </div>
          </div>
          <div style={{marginLeft: '400px', marginTop: '25px'}}  className="row">
          <div style={{marginLeft: '20px'}}>
            <Card name={"Pooja Mandal"} job={"Quality Engg Manager"}  image={img1}/>
          </div>
          <div style={{marginLeft: '40px'}}>
            <Card name={"Abcgefgh"} job={"Abcgefgh Engineer"}  image={img1}/>
          </div>
  </div>

      <div style={{marginLeft: '230px', marginTop: '25px'}} sx={{mx:20, my:50}} className="row">
          <div style={{marginLeft: '60px'}}>
            <Card name={"Abcgefgh"} job={"Abcgefgh Engineer"}  image={img1}/>
          </div>
          <div style={{marginLeft: '40px'}}>
            <Card name={"Abcgefgh"} job={"Abcgefgh Engineer"}  image={img1}/>
          </div>
          <div style={{marginLeft: '40px'}}>
            <Card name={"Abcgefgh"} job={"Abcgefgh Engineer"}  image={img1}/>
          </div>
      </div>
</div>

      <br /><br /><br />
    </Layout>
    </>
  );
}

