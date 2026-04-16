"use client";

import React from "react";
import { Phone, Mail } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "环保水漆",
    description: "采用水性环保漆面，不含有害物质，安全无异味，符合国际环保标准",
  },
  {
    number: "02",
    title: "防污耐渍",
    description: "漆面形成保护层，有效抵御油渍、水渍等污染，日常清洁更轻松",
  },
  {
    number: "03",
    title: "质感升级",
    description: "细腻漆面呈现高档质感，触感顺滑，视觉效果更加精致美观",
  },
  {
    number: "04",
    title: "厚度不变",
    description: "薄涂层工艺确保板材厚度保持20mm标准，不影响原有安装设计",
  },
];

const specifications = [
  { label: "标准厚度", value: "20mm" },
  { label: "漆面类型", value: "水性环保漆" },
  { label: "漆膜厚度", value: "约 0.1mm" },
  { label: "表面光泽", value: "哑光 / 亮光可选" },
  { label: "基材类型", value: "欧松板 / 多层板" },
  { label: "甲醛释放", value: "E0 级" },
];

const processSteps = [
  { step: "01", title: "基材选择", description: "精选优质板材作为基材" },
  { step: "02", title: "表面处理", description: "精细打磨确保平整光滑" },
  { step: "03", title: "底漆涂布", description: "增强漆面附着力" },
  { step: "04", title: "面漆处理", description: "形成均匀保护层" },
  { step: "05", title: "品质检验", description: "严格检测出厂标准" },
];

const applications = [
  {
    title: "高端家具定制",
    description: "橱柜、衣柜、书柜等家具饰面",
    image: "/images/furniture.jpg",
  },
  {
    title: "室内装饰工程",
    description: "墙面装饰、天花板、隔断等",
    image: "/images/construction.jpg",
  },
  {
    title: "商业空间设计",
    description: "酒店、展厅、办公空间等",
    image: "/images/industrial.jpg",
  },
];

function ScrollReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className || ""}`}
    >
      {children}
    </div>
  );
}

export default function LacquerBoardPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section - 上下渐变展示 */}
      <section className="relative min-h-screen flex flex-col">
        {/* 纯色顶部区域 */}
        <div className="bg-foreground pt-24 pb-16 lg:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-background/50 hover:text-background transition-colors mb-12 w-fit"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm tracking-wide">返回首页</span>
            </Link>

            <div className="max-w-3xl">
              <div className="inline-block bg-background text-foreground text-[10px] tracking-[0.2em] uppercase font-medium px-4 py-2 mb-8">
                New Product 2024
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-background leading-[0.95] tracking-tight">
                漆感板
              </h1>
              <p className="text-xl md:text-2xl text-background/50 mt-4 tracking-wide font-light">
                Lacquer Finish Board
              </p>

              <p className="mt-8 text-lg md:text-xl text-background/60 max-w-xl leading-relaxed font-light">
                在板材表面覆盖一层优质水漆，薄薄一层不改变板面厚度，却能带来质感与性能的双重提升。
              </p>

              <div className="flex items-center gap-8 mt-12">
                <div className="border-l border-background/20 pl-6">
                  <div className="text-4xl font-serif text-background">20</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-background/50 mt-1">
                    mm 厚度
                  </div>
                </div>
                <div className="border-l border-background/20 pl-6">
                  <div className="text-4xl font-serif text-background">0.1</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-background/50 mt-1">
                    mm 漆膜
                  </div>
                </div>
                <div className="border-l border-background/20 pl-6">
                  <div className="text-4xl font-serif text-background">E0</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-background/50 mt-1">
                    环保等级
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 四个特性小卡片 + 背景图渐变过渡 */}
        <div className="relative">
          {/* 背景图片 */}
          <div className="absolute inset-0">
            <Image
              src="/images/lacquer-board.jpg"
              alt="漆感板"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* 从上往下的渐变遮罩：顶部深色，往下逐渐透明显露图片 */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground/70 to-foreground/30" />

          {/* 特性卡片内容 */}
          <div className="relative z-10 py-16 lg:py-24">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {features.map((feature) => (
                  <div
                    key={feature.number}
                    className="bg-background/10 backdrop-blur-sm border border-background/10 p-6 lg:p-8 group hover:bg-background/20 transition-all duration-500"
                  >
                    <div className="text-3xl font-serif text-background/30 group-hover:text-accent/50 transition-colors">
                      {feature.number}
                    </div>
                    <h3 className="text-lg font-medium text-background mt-4">
                      {feature.title}
                    </h3>
                    <p className="text-background/60 text-sm mt-2 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 底部留出空间显示背景图 */}
          <div className="relative z-10 h-48 lg:h-64" />
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 lg:py-40 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/lacquer-comparison.jpg"
                  alt="漆感板对比"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  Comparison
                </span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance">
                  与普通板材对比
                </h2>

                <div className="mt-10 space-y-6">
                  {[
                    "表面更光滑细腻，手感更佳",
                    "防污能力提升 300% 以上",
                    "清洁维护更加便捷",
                    "外观档次显著提升",
                    "使用寿命更长久",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 pb-6 border-b border-border"
                    >
                      <div className="w-8 h-8 border border-foreground/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground/80 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-40 bg-muted">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  Process
                </span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl text-foreground text-balance">
                  匠心工艺
                </h2>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                从原材料到成品，每一步都遵循严格的工艺标准，确保每一张漆感板都达到出厂品质要求。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {processSteps.map((item, index) => (
                <div key={item.step} className="relative group">
                  <div className="bg-background p-6 lg:p-8 h-full transition-colors duration-300 group-hover:bg-foreground">
                    <div className="text-3xl lg:text-4xl font-serif text-border group-hover:text-background/20 transition-colors">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-medium text-foreground group-hover:text-background mt-4 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-background/60 mt-2 transition-colors">
                      {item.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-24 lg:py-40 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  Specifications
                </span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl text-foreground text-balance">
                  技术参数
                </h2>
              </div>

              <div className="border-t border-border">
                {specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between items-center py-5 border-b border-border"
                  >
                    <span className="text-foreground">{spec.label}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Applications Section - 三个等宽等高卡片 */}
      <section className="py-24 lg:py-40 bg-muted">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Applications
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-foreground text-balance">
                多元应用场景
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {applications.map((app) => (
                <div
                  key={app.title}
                  className="group relative aspect-[4/5] overflow-hidden"
                >
                  <Image
                    src={app.image || "/placeholder.svg"}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                    <h3 className="text-xl font-medium text-background">
                      {app.title}
                    </h3>
                    <p className="text-background/60 text-sm mt-2">
                      {app.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quality Section - 简洁居中设计 */}
      <section className="py-24 lg:py-40 bg-foreground">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background leading-tight text-balance">
                专业成就品质
              </h2>
              <p className="mt-8 text-background/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                深耕板材行业25年，每一张漆感板都经过严格检测，确保达到E0级环保标准
              </p>
            </div>

            {/* 三个核心数据 */}
            <div className="grid grid-cols-3 gap-8 mt-20">
              {[
                { value: "25", unit: "年", label: "行业深耕" },
                { value: "E0", unit: "级", label: "环保标准" },
                { value: "99.5", unit: "%", label: "出厂合格率" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl md:text-6xl lg:text-7xl font-serif text-background">
                      {stat.value}
                    </span>
                    <span className="text-xl md:text-2xl text-background/50 ml-1">
                      {stat.unit}
                    </span>
                  </div>
                  <div className="text-sm tracking-[0.1em] text-background/40 mt-3">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section - 左右分栏布局 */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* 左侧文字内容 */}
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  Contact Us
                </span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
                  开启合作
                </h2>
                <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                  联系我们获取漆感板样品，亲自感受薄漆带来的质感提升。我们的专业团队将为您提供一对一咨询服务。
                </p>

                {/* 联系信息 */}
                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-foreground flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-background" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground">咨询热线</div>
                      <a href="tel:400-888-8888" className="text-xl text-foreground hover:text-accent transition-colors">
                        400-888-8888
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-foreground flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-background" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground">商务邮箱</div>
                      <a href="mailto:contact@jinbeifu.com" className="text-xl text-foreground hover:text-accent transition-colors">
                        contact@jinbeifu.com
                      </a>
                    </div>
                  </div>
                </div>

                <p className="mt-8 text-muted-foreground text-sm">
                  工作时间：周一至周六 8:00 - 18:00
                </p>
              </div>

              {/* 右侧按钮卡片 */}
              <div className="space-y-4">
                <Link
                  href="tel:400-888-8888"
                  className="group flex items-center justify-between p-8 bg-foreground text-background hover:bg-accent transition-all duration-300"
                >
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-background/50 mb-2">
                      Sample Request
                    </div>
                    <div className="text-2xl font-medium">免费获取样品</div>
                    <p className="text-background/60 text-sm mt-2">
                      申请漆感板实物样品，直观感受产品品质
                    </p>
                  </div>
                  <div className="w-14 h-14 border border-background/20 flex items-center justify-center flex-shrink-0 ml-6 group-hover:border-background/40 transition-colors">
                    <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>

                <Link
                  href="/#contact"
                  className="group flex items-center justify-between p-8 bg-background border border-border hover:border-foreground transition-all duration-300"
                >
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                      Price Inquiry
                    </div>
                    <div className="text-2xl font-medium text-foreground">立即询价</div>
                    <p className="text-muted-foreground text-sm mt-2">
                      获取漆感板批量采购优惠报价
                    </p>
                  </div>
                  <div className="w-14 h-14 border border-border flex items-center justify-center flex-shrink-0 ml-6 group-hover:border-foreground transition-colors">
                    <ArrowRight className="w-6 h-6 text-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
