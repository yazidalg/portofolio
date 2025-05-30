import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Yazid Al Ghozali</h1>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Image
            src="/profile.png"
            alt="Yazid Al Ghozali"
            width={128}
            height={128}
            className="rounded-full mx-auto mb-8 object-cover"
            priority
          />
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">Software Engineer Student</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Started as a mobile developer in 2021, evolved through full-stack development, and now specializing in
            DevOps engineering. Passionate about building scalable infrastructure and automating deployment pipelines.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Link href="https://github.com/yazidalg" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/yazid-al-ghozali" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-2 text-slate-600">
            <MapPin className="w-4 h-4" />
            <span>Bandung, Indonesia</span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            "Biggest impact is start from small things"
          </p>
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {/* Gallery Item 1 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/grads.jpg"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">Graduation Day</h4>
                  <p className="text-sm">SMK IDN Boarding School</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/klarsmile.jpeg"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">Klarsmile DevOps Team</h4>
                  <p className="text-sm">Cost Estimate</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/git-101.jpeg"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">Git Workshop</h4>
                  <p className="text-sm">Mentor of Git 101 Workshop in Motion Laboratory</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/motionhack2024.jpg"
                alt="Web Application Interface"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">MotionHack 2024</h4>
                  <p className="text-sm">Hackathon Event in Motion Laboratory</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/sg-motion-ios.jpg"
                alt="Monitoring Dashboard"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">iOS Development</h4>
                  <p className="text-sm">Study Group iOS Development in Motion Laboratory</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 6 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/setup-server.jpg"
                alt="Infrastructure Diagram"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">Server Setup</h4>
                  <p className="text-sm">Cloudflare Zero Trust on On-Premise Server</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 7 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/meet-klarsmile.jpg"
                alt="Mobile App Screenshots"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">Klarsmile DevOps & Developer Team</h4>
                  <p className="text-sm">Test Application after Migration</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 8 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/yazid-webteam.jpg"
                alt="Docker Containers"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">Web Team</h4>
                  <p className="text-sm">Web Team in Motion Laboratory</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 9 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/yazid.jpg"
                alt="API Documentation"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">Motion Laboratory QnA</h4>
                  <p className="text-sm">Motion Take Over Event Mobile Programming</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 11 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/motionlab.jpeg"
                alt="Security Scanning Results"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">Motion Laboratory</h4>
                  <p className="text-sm">Mobile Innovation Lab</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 12 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/seventsky.jpeg"
                alt="Security Scanning Results"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">SevenSky</h4>
                  <p className="text-sm">Development Team</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 13 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/abdimas.JPG"
                alt="Security Scanning Results"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">Community Service</h4>
                  <p className="text-sm">Education Program from Telkom University</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 14 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/lidm.jpeg"
                alt="Security Scanning Results"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">LIDM Research</h4>
                  <p className="text-sm">Competition, Research, and Development</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 15 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/robotic.jpg"
                alt="Security Scanning Results"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">Robotics Team</h4>
                  <p className="text-sm">Robotics Arm Competition at Pancasila University</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 16 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/technowadays.jpeg"
                alt="Security Scanning Results"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">Technowadays</h4>
                  <p className="text-sm">Tech Event</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 17 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/rumahkisah.jpeg"
                alt="Security Scanning Results"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">Rumah Kisah</h4>
                  <p className="text-sm">Internship at Rumah Kisah as Flutter Developer</p>
                </div>
              </div>
            </div>
            {/* Gallery Item 19 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="https://camo.githubusercontent.com/037fc4f7d42d8021eedfa39078f2e4bd2824bf73441667d9f0425a93d23b90ca/68747470733a2f2f63646e2e7177696b6c6162732e636f6d2f445067744e79374a546e3657364a59354a36574a617346765574376132253242353843357834424f57536a3745253344"
                alt="Security Scanning Results"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">Google Cloud Study Jam</h4>
                  <p className="text-sm">Kubernetes Application on GCP</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 20 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="https://camo.githubusercontent.com/afa458b832592c6ec1e7357be9ff1c05be4100af904a1ef12e3384dc6f0a009f/68747470733a2f2f63646e2e7177696b6c6162732e636f6d2f487a737838504430787a6b514a42584d51337143713972515a79397253584c7375446a3358424b44456463253344"
                alt="Security Scanning Results"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">Google Cloud Study Jam</h4>
                  <p className="text-sm">Migrate from SQL to Cloud SQL on GCP</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 21 */}
            <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="https://camo.githubusercontent.com/8019b27fa6a4edfe063dbbdc42fbc0f72ebf3201eb833b09a8775f34158a08e0/68747470733a2f2f63646e2e7177696b6c6162732e636f6d2f6f523842253246754e79502532463067454c33496f6e6c66253242767073726149435a7a475567636761636d432532464d6467253344"
                alt="Security Scanning Results"
                className="w-full object-cover transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-slate-900 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h4 className="font-semibold mb-2">Google Cloud Study Jam</h4>
                  <p className="text-sm">DevOps workflows with GCP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      < section className="py-16 px-4 bg-white" >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader>
                <div className="w-full aspect-video rounded-lg mb-4 relative overflow-hidden">
                  <Image
                    src="/on-premise.png"
                    alt="On-Premise Server"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <CardTitle>On-Premise Server</CardTitle>
                <CardDescription>
                  Migrate from Domainesia VPS to On-Premise Server with Cloudflare Zero Trust for security and Configure Kubernetes Cluster inside to manage application resources.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Git Selfhosted</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Kubernetes</Badge>
                  <Badge variant="outline">Cloudflare</Badge>
                  <Badge variant="outline">Zero Trust</Badge>
                  <Badge variant="outline">Linux</Badge>
                  <Badge variant="outline">SSH</Badge>
                  <Badge variant="outline">VPN</Badge>
                  <Badge variant="outline">DNS</Badge>
                  <Badge variant="outline">Monitoring</Badge>
                </div>
                <div className="flex gap-2 mt-auto">
                  <Link href="https://github.com/MobileInnovationLab" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </Link>
                  <Link href="https://kubernetes.motionlaboratory.com/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader>
                <div className="w-full aspect-video rounded-lg mb-4 relative overflow-hidden">
                  <Image
                    src="/klar.jpg"
                    alt="AWS Infrastructure as Code"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <CardTitle>AWS Infrastructure as Code</CardTitle>
                <CardDescription>
                  Cloud transformation and migration from Digital Ocean to AWS. Design scalable cloud architectures and modernize applications to leverage cloud-native features.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">DigitalOcean</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Terraform</Badge>
                  <Badge variant="outline">Terragrunt</Badge>
                  <Badge variant="outline">Vault by Hashicorp</Badge>
                  <Badge variant="outline">Kubernetes</Badge>
                  <Badge variant="outline">GitHub Actions</Badge>
                  <Badge variant="outline">ArgoCD</Badge>
                  <Badge variant="outline">Helm</Badge>
                  <Badge variant="outline">Prometheus</Badge>
                  <Badge variant="outline">Grafana</Badge>
                  <Badge variant="outline">AlertManager</Badge>
                </div>
                <div className="flex gap-2 mt-auto">
                  <Link href="https://github.com/klarsmile" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </Link>
                  <Link href="https://klarsmile.com/id" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader>
                <div className="w-full aspect-video rounded-lg mb-4 relative overflow-hidden">
                  <Image
                    src="/anarya.jpeg"
                    alt="AWS Infrastructure as Code"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <CardTitle>Cost Optimization and Maintenance</CardTitle>
                <CardDescription>
                  Cloud Optimization to reduce costs and right-sizing utilization. Ensure cloud investment and budget delivers optimal results with output ~60% of cost reduction achieved.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Google Cloud</Badge>
                  <Badge variant="outline">Kubernetes</Badge>
                  <Badge variant="outline">Cost Optimization</Badge>
                  <Badge variant="outline">Maintenance</Badge>
                </div>
                <div className="flex gap-2 mt-auto">
                  <Link href="https://github.com/yourusername/monitoring-system" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </Link>
                  <Link href="https://demo-url-for-monitoring.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader>
                <div className="w-full aspect-video rounded-lg mb-4 relative overflow-hidden">
                  <div className="w-full aspect-video rounded-lg mb-4 relative overflow-hidden">
                    <Image
                      src="/serverless.png"
                      alt="AWS Infrastructure as Code"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardTitle>Serverless Architecture</CardTitle>
                <CardDescription>
                  Analyze, Design, Maintenance and Implement Serverless Architecture for a web application to reduce cost and improve performance for team with output ~60% of productivity improvement.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Google Cloud</Badge>
                  <Badge variant="outline">Serverless</Badge>
                  <Badge variant="outline">YAML</Badge>
                  <Badge variant="outline">Github Actions</Badge>
                </div>
                <div className="flex gap-2 mt-auto">
                  <Link href="https://github.com/yourusername/server-config" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </Link>
                  <Link href="https://demo-url-for-server-config.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader>
                <div className="w-full aspect-video rounded-lg mb-4 relative overflow-hidden">
                  <Image
                    src="/rplgdc.png"
                    alt="AWS Infrastructure as Code"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <CardTitle>Kubernetes and Helm Chart</CardTitle>
                <CardDescription>
                  Docker containerization and Kubernetes deployment for a multi-service application with service mesh.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Kubernetes</Badge>
                  <Badge variant="outline">Helm Chart</Badge>
                  <Badge variant="outline">Github</Badge>
                  <Badge variant="outline">Github Actions</Badge>
                  <Badge variant="outline">ArgoCD</Badge>
                </div>
                <div className="flex gap-2 mt-auto">
                  <Link href="https://github.com/RPLGDC-1" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </Link>
                  <Link href="https://admin-duniabelanja.krobot.my.id" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader>
                <div className="w-full aspect-video rounded-lg mb-4 relative overflow-hidden">
                  <Image
                    src="/ios.png"
                    alt="AWS Infrastructure as Code"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Bizmo Mobile App</CardTitle>
                <CardDescription>
                  Learn about iOS from zero to hero.
                  Working with Clean Architecture, Dependency Injection, MVVM and Moya, and following hackathon also called MotionHack for about 3 days to build a product with a team.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">iOS Development</Badge>
                  <Badge variant="outline">Swift</Badge>
                  <Badge variant="outline">Dependency Injection</Badge>
                  <Badge variant="outline">MVVM</Badge>
                  <Badge variant="outline">Moya</Badge>
                  <Badge variant="outline">Clean Architecture</Badge>
                  <Badge variant="outline">Teamwork</Badge>
                </div>
                <div className="flex gap-2 mt-auto">
                  <Link href="https://github.com/Arzu95/Team1_MotionHack2024" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/yazid-al-ghozali/overlay/1720397092620/single-media-viewer/?profileId=ACoAAC1g07sBiEyckfYn5_VbcwygxH81ZMupqTk" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Evidence
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader>
                <div className="w-full aspect-video rounded-lg mb-4 relative overflow-hidden">
                  <Image
                    src="/cicd.png"
                    alt="AWS Infrastructure as Code"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>Continous Integration and Delivery</CardTitle>
                <CardDescription>
                  Learn about CI/CD with SonarQube and Codacy for code quality and code coverage when some push and pull request trigger the pipeline on branch main.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">SonarQube</Badge>
                  <Badge variant="outline">Codacy</Badge>
                  <Badge variant="outline">Java</Badge>
                  <Badge variant="outline">Continous Integration</Badge>
                  <Badge variant="outline">Continous Delivery</Badge>
                </div>
                <div className="flex gap-2 mt-auto">
                  <Link href="https://github.com/yazidalg/Java-CICD" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </Link>
                  <Link href="https://sonarcloud.io/project/overview?id=yazidalg_Java-CICD" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Sonar
                    </Button>
                  </Link>
                  <Link href="https://app.codacy.com/gh/yazidalg/Java-CICD/dashboard" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Codacy
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* Skills Section */}
      < section className="py-16 px-4" >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">DevOps Skills & Technologies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">Cloud Platforms</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Azure</Badge>
                  <Badge variant="secondary">Google Cloud</Badge>
                  <Badge variant="secondary">DigitalOcean</Badge>
                  <Badge variant="secondary">Terraform</Badge>
                  <Badge variant="secondary">Terragrunt</Badge>
                  <Badge variant="secondary">Vault by Hashicorp</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">Containerization & Orchestration</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                  <Badge variant="secondary">Helm</Badge>
                  <Badge variant="secondary">Docker Compose</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">CI/CD & Automation</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">GitHub Actions</Badge>
                  <Badge variant="secondary">GitLab CI</Badge>
                  <Badge variant="secondary">Ansible</Badge>
                  <Badge variant="secondary">ArgoCD</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">Monitoring & Logging</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Prometheus</Badge>
                  <Badge variant="secondary">Grafana</Badge>
                  <Badge variant="secondary">New Relic</Badge>
                  <Badge variant="secondary">Sentry</Badge>
                  <Badge variant="secondary">LogDNA</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">Infrastructure & Networking</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Linux</Badge>
                  <Badge variant="secondary">Nginx</Badge>
                  <Badge variant="secondary">Apache</Badge>
                  <Badge variant="secondary">Load Balancers</Badge>
                  <Badge variant="secondary">VPC</Badge>
                  <Badge variant="secondary">DNS</Badge>
                  <Badge variant="secondary">AWS VPN</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">Tools & Languages</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Bash/Shell</Badge>
                  <Badge variant="secondary">Go</Badge>
                  <Badge variant="secondary">YAML</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Vim</Badge>
                  <Badge variant="secondary">Flutter</Badge>
                  <Badge variant="secondary">Dart</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* Education Section */}
      < section className="py-16 px-4 bg-white" >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Education</h3>
          <div className="max-w-3xl mx-auto">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">Undergraduate Software Engineering Student</CardTitle>
                <CardDescription className="text-lg">Telkom University, Bandung</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-semibold text-slate-700">Expected Graduation: Nov 2026</p>
                    <p className="text-slate-600">GPA: 3.5/4.0</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-700">
                    <strong>Relevant Coursework:</strong>
                  </p>
                  <p className="text-slate-600">
                    Mobile Development, Web Technologies, Infrastructure Management, Cloud Computing, Network Security,
                    System Administration, DevOps Practices, Container Technologies
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section className="py-16 px-4" >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-slate-800">Get In Touch</h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Im currently looking for new opportunities and would love to hear from you. Whether you have a question or
            just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col justify-center items-center gap-4 mb-8">
            <Link href="mailto:yazid.al2418@gmail.com">
              <Button size="lg" className="flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                yazid.al2418@gmail.com
              </Button>
            </Link>
          </div>
          <div className="flex justify-center gap-6">
            <Link href="https://github.com/yazidalg" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="lg">
                <Github className="w-6 h-6" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/yazid-al-ghozali" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="lg">
                <Linkedin className="w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-slate-800 text-white py-8 px-4" >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2025 Yazid Al Ghozali. Built with Next.js and deployed using CI/CD pipeline.</p>
        </div>
      </footer >
    </div >
  )
}
