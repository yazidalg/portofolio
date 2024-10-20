"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import { title } from 'process';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul>
        <li>Go 7/10</li>
        <li>Google Cloud Platform 7.5/10</li>
        <li>AWS 7.5/10</li>
        <li>Kubernetes 8/10</li>
        <li>ArgoCD 7/10</li>
        <li>Flutter 8/10</li>
        <li>iOS 8/10</li>
        <li>Grafana & Prometheus 7/10</li>
        <li>CI/CD Pipeline 8/10</li>
      </ul>
    )
  },
  {
    title: 'Educations',
    id: 'educations',
    content: (
      <ul>
        <li>Telkom University | 2022 - Present</li>
        <li>SMK IDN Boarding School | 2019 - 2022</li>
      </ul>
    )
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul>
        <li>Dicoding - Belajar Dasar Devops</li>
        <li>Dicoding - Belajar Dasar Jaringan Komputer</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => { 
      setTab(id);
     });
  };
  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mt-9'>
        <Image 
          src="/images/about.jpeg"
          width={500}
          height={500} 
          alt={'About'} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            Currently I'm starting new journey as a Devops Engineer for Junior position and have only been in this role for about 1 year 3 months 
            with some tech stack like several services in AWS for cloud, Argocd for continous deployment, Github Action for CI/CD, Prometheus and Grafana 
            for alert and monitoring, Kubernetes and Helm Chart for container orchestration.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton 
            selectTab={() => handleTabChange('skills')} 
            active={tab === 'skills'}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton 
            selectTab={() => handleTabChange('educations')} 
            active={tab === 'educations'}>
              {" "}
              Educations{" "}
            </TabButton>
            <TabButton 
            selectTab={() => handleTabChange('certifications')} 
            active={tab === 'certifications'}>
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection