import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  products: [
    { label: "欧松板", href: "/#products" },
    { label: "多层板", href: "/#products" },
    { label: "漆感板", href: "/lacquer-board" },
    { label: "全品类板材", href: "/#products" },
  ],
  applications: [
    { label: "建筑工程", href: "/#applications" },
    { label: "家居装饰", href: "/#applications" },
    { label: "工业制造", href: "/#applications" },
  ],
  company: [
    { label: "关于我们", href: "/#about" },
    { label: "品牌故事", href: "/#about" },
    { label: "联系我们", href: "/#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-background flex items-center justify-center">
                <span className="text-foreground font-serif text-2xl font-bold">
                  金
                </span>
              </div>
              <div>
                <span className="text-xl font-medium tracking-wide">
                  金倍福
                </span>
                <span className="block text-xs tracking-[0.3em] text-background/60 uppercase">
                  Jinbeifu Since 1999
                </span>
              </div>
            </div>
            <p className="text-background/70 text-lg leading-relaxed max-w-md font-light">
              二十五载匠心深耕，以品质铸就信赖。
              <br />
              为建筑、家居、工业制造领域提供优质板材解决方案。
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-background/50 mb-6">
                产品系列
              </h4>
              <ul className="space-y-4">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-background/50 mb-6">
                应用领域
              </h4>
              <ul className="space-y-4">
                {footerLinks.applications.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-background/50 mb-6">
                关于金倍福
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-20 pt-12 border-t border-background/10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-background/50 block mb-2">
                  咨询热线
                </span>
                <a
                  href="tel:400-888-8888"
                  className="text-2xl font-light tracking-wide hover:text-accent transition-colors"
                >
                  400-888-8888
                </a>
              </div>
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-background/50 block mb-2">
                  电子邮箱
                </span>
                <a
                  href="mailto:contact@jinbeifu.com"
                  className="text-lg font-light hover:text-accent transition-colors"
                >
                  contact@jinbeifu.com
                </a>
              </div>
            </div>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-background/30 hover:bg-background hover:text-foreground transition-all duration-300"
            >
              <span className="text-sm tracking-wide">获取报价</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-background/40">
            <p>&copy; 2024 金倍福板材供应链. All rights reserved.</p>
            <p>专注板材行业25年</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
