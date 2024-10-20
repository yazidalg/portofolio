"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import Link from 'next/link';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>
          <span className='font-bold'>Go</span> with rate 
          <span className='text-green-500 font-bold'> 7/10</span>
        </li>
        <li>
          <span className='font-bold'>Google Cloud Platform</span> with rate
          <span className='text-green-500 font-bold'> 7.5/10</span>
        </li>
        <li>
          <span className='font-bold'>AWS</span> with rate
          <span className='text-green-500 font-bold'> 7.5/10</span>
        </li>
        <li>
          <span className='font-bold'>Kubernetes</span> with rate
          <span className='text-green-500 font-bold'> 8/10</span>
        </li>
        <li>
          <span className='font-bold'>ArgoCD</span> with rate
          <span className='text-green-500 font-bold'> 7/10</span>
        </li>
        <li>
          <span className='font-bold'>Flutter</span> with rate
          <span className='text-green-500 font-bold'> 7/10</span>
        </li>
        <li>
          <span className='font-bold'>iOS Development</span> with rate
          <span className='text-green-500 font-bold'> 8/10</span>
        </li>
        <li>
          <span className='font-bold'>Grafana & Prometheus</span> with rate
          <span className='text-green-500 font-bold'> 7/10</span>
        </li>
        <li>
          <span className='font-bold'>Github Actions</span> with rate
          <span className='text-green-500 font-bold'> 8/10</span>

        </li>
      </ul>
    )
  },
  {
    title: 'Educations',
    id: 'educations',
    content: (
      <ul className='list-disc pl-2'>
        <li>Telkom University | 2022 - Present</li>
        <li>SMK IDN Boarding School | 2019 - 2022</li>
      </ul>
    )
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-2'>
        <li>
          <Link href="https://www.dicoding.com/certificates/JMZV4QG9JXN9">Dicoding - Belajar Dasar Devops</Link>
        </li>
        <li>
          <Link href="https://www.dicoding.com/certificates/0LZ042NL3P65">Dicoding - Belajar Dasar Jaringan Komputer</Link>
        </li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
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