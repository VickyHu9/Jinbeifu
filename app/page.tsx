"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Phone, Mail } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "欧松板",
    nameEn: "OSB",
    description: "定向结构刨花板，卓越的结构强度与稳定性",
    thickness: "20mm",
    image: "/images/osb-board.jpg",
  },
  {
    name: "多层板",
    nameEn: "Plywood",
    description: "多层实木胶合，抗变形能力出众",
    thickness: "20mm",
    image: "/images/plywood-new.jpg",
  },
  {
    name: "漆感板",
    nameEn: "Lacquer",
    description: "水漆覆面工艺，质感与防污双重提升",
    thickness: "20mm",
    image: "/images/lacquer-board.jpg",
    isNew: true,
    href: "/lacquer-board",
    featured: true,
  },
  {
    name: "封边条",
    nameEn: "Edge Band",
    description: "配套封边解决方案，色彩纹理精准匹配",
    thickness: "多规格",
    image: "/images/edge-banding.jpg",
  },
];

const applications = [
  {
    title: "建筑工程",
    subtitle: "Architecture",
    description: "为建筑施工提供结构板材、模板、外墙装饰板等专业解决方案",
    image: "/images/construction.jpg",
  },
  {
    title: "家居装饰",
    subtitle: "Interior",
    description: "家具制造、室内装修的环保优质之选",
    image: "/images/furniture.jpg",
  },
  {
    title: "工业制造",
    subtitle: "Industrial",
    description: "包装、物流、工业设备的专业板材方案",
    image: "/images/industrial.jpg",
  },
];

const features = [
  "25年专注板材领域",
  "全品类一站式供应",
  "严格品控体系",
  "完善仓储物流",
  "专业技术支持",
];

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const target = parseInt(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-serif">
      {count}
      <span className="text-accent">{suffix}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260105172508_18_22-LFNRtrCx0HyGQ1Vc3ZXNcXFV12Q94A.jpg"
            alt="金倍福板材"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full px-6 lg:px-12 pt-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-background/40" />
              <span className="text-xs tracking-[0.3em] uppercase text-background/70">
                Since 2020
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-background leading-[0.95] tracking-tight text-balance">
              品质板材
              <br />
              <span className="text-background/60">源于专业匠心</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-background/70 max-w-xl leading-relaxed font-light">
              金倍福板材，为建筑、家居、工业制造领域，提供欧松板、多层板等全品类优质木材。
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="relative z-10 border-t border-background/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-background/10">
              <Link
                href="/#about"
                className="group flex items-center justify-between py-6 md:py-8 md:pr-8 text-background/70 hover:text-background transition-colors"
              >
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase block mb-1">
                    了解品牌
                  </span>
                  <span className="text-sm">Our Story</span>
                </div>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#products"
                className="group flex items-center justify-between py-6 md:py-8 md:px-8 text-background/70 hover:text-background transition-colors"
              >
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase block mb-1">
                    产品系列
                  </span>
                  <span className="text-sm">Products</span>
                </div>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#contact"
                className="group flex items-center justify-between py-6 md:py-8 md:pl-8 text-background/70 hover:text-background transition-colors"
              >
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase block mb-1">
                    联系咨询
                  </span>
                  <span className="text-sm">Contact</span>
                </div>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 lg:py-32 bg-background scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Product Series
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
                全品类板材
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              以欧松板、多层板为核心，提供20mm厚度标准化产品，满足各类工程与制造需求
            </p>
          </div>

          {/* Main Products Grid - 2x2 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className={cn(
                  "group relative bg-muted overflow-hidden",
                  product.featured && "col-span-1"
                )}
              >
                {product.isNew && (
                  <div className="absolute top-4 left-4 z-10 bg-foreground text-background text-[9px] tracking-[0.2em] uppercase font-medium px-3 py-1.5">
                    New
                  </div>
                )}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 lg:p-5">
                  <div className="flex items-baseline justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">
                        {product.name}
                      </h3>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                        {product.nameEn}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {product.thickness}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  {product.href ? (
                    <Link
                      href={product.href}
                      className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-accent transition-colors"
                    >
                      <span>了解详情</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/40">
                      <span>了解详情</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product - Lacquer Board */}
      <section className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <div className="inline-block bg-background/10 backdrop-blur-sm text-background/90 text-[10px] tracking-[0.2em] uppercase font-medium px-4 py-2 mb-8 border border-background/20">
                New Product 2026
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background leading-tight text-balance">
                漆感板
              </h2>
              <p className="mt-6 text-background/60 text-lg leading-relaxed max-w-lg">
                {"触感与视觉双双升级。防污耐磨，细致呵护，为家居带来温柔而坚定的保护。漆感生活，净显质感——从此，家的每一面都值得细细触摸。"}
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { title: "环保水漆", desc: "安全无异味" },
                  { title: "防污耐渍", desc: "易于清洁" },
                  { title: "质感升级", desc: "高档外观" },
                  { title: "厚度不变", desc: "安装便捷" },
                ].map((item) => (
                  <div key={item.title} className="border-l border-background/20 pl-4">
                    <div className="text-background font-medium text-sm">{item.title}</div>
                    <div className="text-background/40 text-xs mt-1">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/lacquer-board"
                className="group inline-flex items-center gap-3 mt-12 px-8 py-4 bg-background text-foreground hover:bg-accent transition-all duration-300"
              >
                <span className="text-sm tracking-wide">查看漆感板详情</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right Image with Overlay */}
            <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2">
              <div className="aspect-[4/5] lg:aspect-auto lg:h-full relative overflow-hidden">
                <Image
                  src="/images/lacquer-board.jpg"
                  alt="漆感板"
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay - Left to Right */}
                <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/60 to-transparent lg:via-foreground/40" />
              </div>
              
              {/* Specs Badge */}
              <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 bg-background/10 backdrop-blur-md border border-background/20 p-5">
                <div className="text-3xl font-serif text-background">20<span className="text-lg ml-1">mm</span></div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-background/60 mt-1">
                  标准厚度
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section - Equal Grid */}
      <section
        id="applications"
        className="py-24 lg:py-32 bg-background scroll-mt-24"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Applications
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
              多元应用场景
            </h2>
          </div>

          {/* Equal Width Grid - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {applications.map((app) => (
              <div key={app.title} className="group relative overflow-hidden">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={app.image || "/placeholder.svg"}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-background/60">
                    {app.subtitle}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-medium text-background mt-2">
                    {app.title}
                  </h3>
                  <p className="text-background/70 text-sm mt-2 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Text Only */}
      <section id="about" className="py-24 lg:py-32 bg-foreground scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-background/40">
              About Jinbeifu
            </span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-background leading-tight text-balance">
              专业成就品质
            </h2>
            <p className="mt-8 text-background/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              自1999年创立以来，金倍福始终秉持"品质至上、客户为先"的经营理念，深耕板材行业二十五载。我们以专业的产品、完善的服务，赢得了千余家客户的信赖与认可。
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16">
              {features.map((feature) => (
                <div key={feature} className="text-center">
                  <div className="w-10 h-10 mx-auto border border-background/20 flex items-center justify-center mb-3">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-background/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-background/10">
              {[
                { value: "25+", label: "年行业经验" },
                { value: "1000+", label: "合作客户" },
                { value: "50+", label: "产品种类" },
                { value: "98%", label: "客户满意度" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-serif text-background">
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-[0.15em] uppercase text-background/40 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean Design */}
      <section id="contact" className="py-24 lg:py-32 bg-muted scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Contact Us
            </span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
              开启合作
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              无论是大型建筑工程还是定制家具项目，金倍福专业团队随时为您提供板材解决方案
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-3xl mx-auto">
            <Link
              href="tel:400-888-8888"
              className="group flex items-center gap-5 p-8 bg-background border border-border hover:border-foreground/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-foreground flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-background" />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                  咨询热线
                </div>
                <div className="text-xl lg:text-2xl text-foreground font-light">
                  400-888-8888
                </div>
              </div>
            </Link>

            <Link
              href="mailto:contact@jinbeifu.com"
              className="group flex items-center gap-5 p-8 bg-background border border-border hover:border-foreground/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-foreground flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-background" />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                  商务邮箱
                </div>
                <div className="text-xl lg:text-2xl text-foreground font-light">
                  contact@jinbeifu.com
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm">
              工作时间：周一至周六 8:00 - 18:00
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
