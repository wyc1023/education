import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Heart,
  BookOpen,
  Users,
  ChevronRight,
  Home,
  Sparkles,
  BookCheck,
  Smile,
  Coffee,
  Gamepad2,
  CheckCircle,
  Play,
  LampDesk,
  Pencil,
  Timer,
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'kindergarten' | 'primary'>('kindergarten');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: '首页', href: '#hero' },
    { name: '关于我们', href: '#about' },
    { name: '托管服务', href: '#services' },
    { name: '师资团队', href: '#teachers' },
    { name: '学员风采', href: '#gallery' },
    { name: '联系我们', href: '#contact' },
  ];

  const kindergartenServices = [
    { icon: BookOpen, name: '启蒙阅读', desc: '绘本阅读、故事分享、语言启蒙', color: 'from-orange-400 to-red-400' },
    { icon: Pencil, name: '书写启蒙', desc: '握笔姿势、书写习惯培养', color: 'from-blue-400 to-cyan-400' },
    { icon: Smile, name: '习惯养成', desc: '生活自理、礼貌待人、良好习惯', color: 'from-emerald-400 to-teal-400' },
    { icon: Gamepad2, name: '趣味活动', desc: '益智游戏、手工制作、户外活动', color: 'from-pink-400 to-rose-400' },
  ];

  const primaryServices = [
    { icon: BookCheck, name: '作业陪伴', desc: '督促完成作业、检查纠错、答疑解惑', color: 'from-orange-400 to-amber-400' },
    { icon: Timer, name: '时间管理', desc: '培养时间观念、提高学习效率', color: 'from-blue-400 to-indigo-400' },
    { icon: LampDesk, name: '学习氛围', desc: '安静学习环境、专注力培养', color: 'from-emerald-400 to-teal-400' },
    { icon: BookOpen, name: '阅读习惯', desc: '课外阅读指导、知识拓展', color: 'from-pink-400 to-rose-400' },
  ];

  const teachers = [
    { name: '王老师', title: '托管主管', exp: '6年幼儿教育经验', specialty: '耐心细致，擅长与小朋友沟通', image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: '李老师', title: '辅导老师', exp: '5年小学辅导经验', specialty: '熟悉小学学习内容和习惯培养', image: 'https://images.pexels.com/photos/3184404/pexels-photo-3184404.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: '张老师', title: '生活老师', exp: '4年保育经验', specialty: '细心照顾孩子生活起居', image: 'https://images.pexels.com/photos/3769023/pexels-photo-3769023.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  const features = [
    { icon: Users, title: '小班管理', desc: '每班不超过10人，老师能照顾到每个孩子' },
    { icon: Heart, title: '爱心呵护', desc: '用心关爱每个孩子，像家人一样照顾' },
    { icon: Home, title: '温馨环境', desc: '安全舒适的场地，让孩子开心家长放心' },
    { icon: Star, title: '习惯培养', desc: '重点培养学习习惯和自理能力' },
  ];

  const stats = [
    { value: '6', label: '办学年限' },
    { value: '500+', label: '服务家庭' },
    { value: '99%', label: '家长满意度' },
    { value: '8+', label: '专业老师' },
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/8198906/pexels-photo-8198906.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/8617889/pexels-photo-8617889.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/8199149/pexels-photo-8199149.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/8566459/pexels-photo-8566459.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/8199632/pexels-photo-8199632.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/8566512/pexels-photo-8566512.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <span className={`text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent ${scrolled ? '' : 'drop-shadow-lg'}`} style={scrolled ? {} : { WebkitTextFillColor: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                童欣托管
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-orange-500 ${scrolled ? 'text-gray-700' : 'text-white drop-shadow'}`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-2.5 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full font-medium text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                预约参观
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full text-center py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full font-medium"
            >
              预约参观
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <Star className="w-4 h-4 md:w-6 md:h-6 text-white/30" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                新店开业 欢迎参观
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                童欣托管
                <br />
                <span className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>
                  放心托付 快乐成长
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8">
                为幼儿园小中大班及小学1-3年级的孩子
                <br />
                提供温馨的课后托管服务，让家长安心工作
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
                <a
                  href="#contact"
                  className="group px-8 py-4 bg-white text-orange-500 rounded-full font-bold text-lg shadow-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
                >
                  预约参观
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center"
                >
                  了解服务
                </a>
              </div>
            </div>

            {/* Right Content - Service Cards */}
            <div className="hidden lg:block animate-fade-in-up animation-delay-200">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BookCheck, name: '作业辅导', desc: '督促完成作业\n耐心答疑解惑', color: 'from-orange-400 to-red-400' },
                  { icon: LampDesk, name: '学习氛围', desc: '安静的学习环境\n培养专注习惯', color: 'from-blue-400 to-cyan-400' },
                  { icon: Heart, name: '爱心呵护', desc: '细心照顾生活\n像家人一样关怀', color: 'from-pink-400 to-rose-400' },
                  { icon: Clock, name: '时间管理', desc: '规律作息安排\n养成良好习惯', color: 'from-emerald-400 to-teal-400' },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-white/70 text-sm whitespace-pre-line">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-indicator" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                关于我们
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                专业幼儿托管机构
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                童欣托管专注于幼儿园小中大班及小学1-3年级学生的课后托管服务，为孩子提供一个温馨、安全的学习成长空间，让家长安心工作。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/8617889/pexels-photo-8617889.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="托管环境"
                    className="w-full h-80 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-bold">温馨的托管环境</p>
                    <p className="text-white/80 text-sm">为孩子创造最佳成长空间</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl shadow-xl flex items-center justify-center transform rotate-6">
                  <div className="text-center text-white -rotate-6">
                    <div className="text-3xl md:text-4xl font-bold">5</div>
                    <div className="text-xs md:text-sm">年用心经营</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  用心呵护，让家长放心
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  我们提供安全、舒适的托管环境，帮助孩子在放学后有一个固定的去处。在这里，孩子们可以完成作业、养成良好学习习惯、与同龄伙伴一起成长。我们的老师会耐心督促和辅导，培养孩子的专注力和自理能力。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-400 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm">{feature.title}</h4>
                        <p className="text-gray-500 text-xs mt-1">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              托管服务
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              我们的托管内容
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              根据不同年龄段特点，提供相应的托管照顾和辅导服务
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('kindergarten')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'kindergarten' ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg' : 'text-gray-600 hover:text-gray-800'}`}
              >
                幼儿园阶段
              </button>
              <button
                onClick={() => setActiveTab('primary')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'primary' ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg' : 'text-gray-600 hover:text-gray-800'}`}
              >
                小学1-3年级
              </button>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activeTab === 'kindergarten' ? kindergartenServices : primaryServices).map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  <service.icon className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center mt-4 text-orange-500 font-medium text-sm group-hover:text-orange-600"
                  >
                    了解详情
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Service Schedule */}
          <div className="mt-16 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">灵活的托管时间</h3>
                <p className="text-white/90 mb-6">
                  我们提供多种托管时间段选择，满足不同家长的需求。安全的环境、专业的照顾，让孩子开心、家长放心。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-300" />
                    <span>课后托管：周一至周五 15:30-19:00</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-300" />
                    <span>寒暑假托管：8:00-18:00 全天服务</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-300" />
                    <span>周末托管：周六 9:00-17:00</span>
                  </div>
                </div>
              </div>
              {/*<div className="relative">*/}
              {/*  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">*/}
              {/*    <Coffee className="w-12 h-12 text-yellow-300 mb-4" />*/}
              {/*    <h4 className="text-xl font-bold mb-2">点心供应</h4>*/}
              {/*    <p className="text-white/80 text-sm">下午点心和饮品，保证孩子营养补充</p>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${visibleSections.has('teachers') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
              师资团队
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              用心的托管老师
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              有爱心、有耐心、有责任心的老师团队，用心照顾每一个孩子
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
                  <p className="text-orange-500 font-medium text-sm mt-1">{teacher.title}</p>
                  <p className="text-gray-500 text-sm mt-2">{teacher.exp}</p>
                  <p className="text-gray-400 text-xs mt-1">{teacher.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${visibleSections.has('gallery') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
              精彩瞬间
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              孩子们的快乐时光
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              记录孩子们在托管班的快乐成长时光
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`精彩瞬间 ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 text-orange-500 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              家长真实评价
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              感谢每一位家长的信任与支持
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: '张妈妈', child: '小明(一年级)', comment: '孩子放学后有地方去，作业也能按时完成，老师很负责！我们下班接孩子正好，特别方便。' },
              { name: '李爸爸', child: '小红(大班)', comment: '环境很温馨，老师对孩子们很细心。孩子在这里养成了很好的学习习惯，比在家里效率高多了。' },
              { name: '王妈妈', child: '小华(二年级)', comment: '之前孩子放学就玩手机，现在能安静写作业了，还有小伙伴一起学习，进步很明显！' },
              { name: '陈妈妈', child: '小宝(中班)', comment: '老师很耐心，孩子很喜欢来这里。每天回家都跟我分享在托管班的事，性格也开朗了很多。' },
              { name: '刘爸爸', child: '小芳(三年级)', comment: '作业质量提高了，老师会帮忙检查纠错。孩子养成了认真完成作业的好习惯。' },
              { name: '赵妈妈', child: '小杰(大班)', comment: '托管班活动丰富，孩子每天都很期待去。老师照顾周到，非常放心！' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-3">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.child}</div>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">{testimonial.comment}</p>
                <div className="flex items-center mt-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
              联系我们
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              欢迎预约参观
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              新店开业，欢迎家长带孩子前来参观，了解我们的托管环境和服务
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-6 md:p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">联系方式</h3>
              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-white/80 text-sm">咨询热线</div>
                    <div className="text-2xl font-bold">400-XXX-XXXX</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-white/80 text-sm">电子邮箱</div>
                    <div className="text-lg font-medium">info@tongxin.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-white/80 text-sm">托管地址</div>
                    <div className="text-lg font-medium">XX市XX区XX路XXX号</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-white/80 text-sm">服务时间</div>
                    <div className="text-lg font-medium">周一至周日 8:00-20:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code & Social */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-40 h-40 bg-gray-100 mx-auto rounded-xl mb-4 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
                  二维码
                </div>
                <p className="text-gray-700 font-medium">扫码关注公众号</p>
                <p className="text-gray-500 text-sm mt-1">获取更多托管资讯</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <p className="text-gray-700 font-medium mb-2">托管位置</p>
                <p className="text-gray-500 text-sm">位于XX商圈核心地段，交通便利<br />临近XX小学、XX幼儿园</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">童欣托管</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                专注于幼儿园及小学生课后托管服务，为家长分忧，让孩子快乐成长。
              </p>
              <div className="flex space-x-4">
                {['微信', '微博', '抖音'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                  >
                    <span className="text-xs">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">快速链接</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-orange-400 transition-colors">关于我们</a></li>
                <li><a href="#services" className="hover:text-orange-400 transition-colors">托管服务</a></li>
                <li><a href="#teachers" className="hover:text-orange-400 transition-colors">师资团队</a></li>
                <li><a href="#gallery" className="hover:text-orange-400 transition-colors">精彩瞬间</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">联系方式</h4>
              <ul className="space-y-2 text-gray-400">
                <li>电话：400-XXX-XXXX</li>
                <li>邮箱：info@tongxin.com</li>
                <li>地址：XX市XX区XX路XXX号</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 童欣托管 版权所有 | 备案号：XXXXXX</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
