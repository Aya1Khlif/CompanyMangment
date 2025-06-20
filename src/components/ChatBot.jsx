import { useState, useRef, useEffect } from 'react';
import Chatbot from 'react-chatbot-kit';
import './ChatBot.css';

function ChatBot() {
  const [messages, setMessages] = useState([
    { id: 1, message: 'مرحبًا بك! كيف أساعدك اليوم؟', type: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    'خدماتنا', 'الأسعار', 'الدعم الفني', 'الأمن السيبراني', 'استشارات', 'اتصل بنا',
    'التسويق الرقمي', 'تطوير الألعاب', 'إدارة المشاريع', 'خدمات السحابة', 'تصميم واجهات',
    'تصميم مواقع', 'الذكاء الاصطناعي', 'تطبيقات موبايل', 'تحليل البيانات', 'حماية البيانات',
    'استضافة', 'DevOps', 'تدريب تقني', 'إنترنت الأشياء', 'دعم متعدد اللغات', 'الواقع الافتراضي',
    'صيانة', 'API', 'تحسين سرعة الموقع', 'اختبار برمجيات', 'التشفير', 'تحسين UX', 'Blockchain',
    'بدء مشروع', 'تحليل منافسين', 'CRM', 'تطبيقات ويب', 'ERP', 'تسويق التطبيقات', 'تحديثات',
    'Big Data', 'حماية الشبكة', 'تطوير Backend', 'Frontend', 'SEO', 'تطوير 3D',
    'أدوات إدارة المشاريع', 'تحليلات سحابية', 'حماية الألعاب', 'إدارة وسائل التواصل',
    'إعلانات مدفوعة', 'تخطيط الموارد', 'تحسين الأداء', 'عقود ذكية'
  ];

  const faqResponses = {
    'مرحبًا': 'مرحبًا! أهلًا بك في شركتنا، كيف أقدر أساعدك؟',
    'مرحبا': 'مرحبًا! أهلًا بك في شركتنا، كيف أقدر أساعدك؟',
    'أهلًا': 'أهلًا وسهلًا! شو بدك تعرف عن خدماتنا التقنية؟',
    'سلام': 'السلام عليكم! جاهز أساعدك، شو سؤالك؟',
    'هلا': 'هلا والله! كيف نقدر نخدمك اليوم؟',
    'صباح الخير': 'صباح النور! مستعد أجاوب على أي سؤال تقني.',
    'مساء الخير': 'مساء الخير! شو بدك تعرف عن خدماتنا؟',
    'كيفك': 'أنا بخير، شكراً! وإنت كيفك؟ شو بدك تسأل؟',
    'شو خدماتكم؟': 'نقدم خدمات تطوير برمجيات، أمن سيبراني، استشارات، تسويق رقمي، تطوير ألعاب، خدمات سحابية، وأكثر.',
    'ماهي خدماتكم': 'نقدم خدمات تطوير برمجيات، أمن سيبراني، استشارات، تسويق رقمي، تطوير ألعاب، خدمات سحابية، وأكثر.',
    'شوبتقدم خدماتت': 'نقدم تطوير تطبيقات، أنظمة أمنية، حلول تقنية مخصصة، وتسويق رقمي.',
    'كيف أتواصل معاكم؟': 'تواصلي معانا عبر البريد: info@company.com أو هاتف: +49-30-123456.',
    'شو الأسعار؟': 'الأسعار تختلف حسب الخدمة، تواصلي معانا لعرض مفصل.',
    'كم مدة المشروع؟': 'مدة المشروع تعتمد على الخدمة، عادةً من أسبوع لشهر.',
    'هل تقدمون دعم فني؟': 'نعم، نقدم دعم فني 24/7 عبر البريد أو الهاتف.',
    'شو الأنظمة الأمنية؟': 'نقدم أنظمة حماية من الهجمات السيبرانية وحلول تشفير.',
    'شو التسويق الرقمي؟': 'نقدم خدمات SEO، إعلانات مدفوعة، وإدارة وسائل التواصل.',
    'هل تقدمون تطوير ألعاب؟': 'نعم، نصمم ألعاب للأندرويد، iOS، والويب.',
    'شو إدارة المشاريع؟': 'نساعدك في تخطيط وتنفيذ مشاريعك بكفاءة.',
    'شو خدمات السحابة؟': 'نقدم تخزين سحابي، خوادم مخصصة، وتحليلات بيانات.',
    'كيف أبدأ بالتسويق؟': 'نقدم خطة تسويق رقمي مخصصة بناءً على أهدافك.',
    'هل تدعمون الألعاب ثلاثية الأبعاد؟': 'نعم، نطور ألعاب 3D بـ Unity وUnreal Engine.',
    'شو أدوات إدارة المشاريع؟': 'نستخدم Jira وTrello لتنظيم المشاريع.',
    'هل تقدمون تحليلات سحابية؟': 'نعم، نقدم تحليلات بيانات سحابية لتحسين الأداء.',
    'شو الـ SEO؟': 'تحسين محركات البحث لزيادة زوار موقعك.',
    'كيف أحمي لعبتي؟': 'نقدم حلول أمنية لحماية الألعاب من القرصنة.',
    'شو تصميم واجهات؟': 'نصمم واجهات مستخدم UI/UX عصرية ومتجاوبة.',
    'هل تقدمون تصميم مواقع؟': 'نعم، نصمم مواقع إلكترونية متجاوبة وسريعة.',
    'شو الذكاء الاصطناعي؟': 'نقدم حلول ذكاء اصطناعي مثل الروبوتات وتحليل البيانات.',
    'هل تقدمون تطبيقات موبايل؟': 'نعم، نطور تطبيقات للأندرويد وiOS.',
    'شو تحليل البيانات؟': 'نحلل البيانات لتحسين أداء الشركات.',
    'كيف أحمي بياناتي؟': 'نستخدم تشفير متقدم وجدران حماية.',
    'هل تقدمون استضافة؟': 'نعم، نقدم استضافة مواقع وخوادم آمنة.',
    'شو الـ DevOps؟': 'نقدم خدمات DevOps لتسريع تطوير البرمجيات.',
    'هل تقدمون تدريب تقني؟': 'نعم، نقدم دورات في البرمجة والأمن السيبراني.',
    'شو إنترنت الأشياء؟': 'نطور حلول IoT لربط الأجهزة.',
    'هل تقدمون دعم متعدد اللغات؟': 'نعم، ندعم تطبيقات متعددة اللغات.',
    'شو الواقع الافتراضي؟': 'نطور تطبيقات واقع افتراضي VR.',
    'هل تقدمون صيانة؟': 'نعم، نقدم صيانة دورية للأنظمة والمواقع.',
    'شو الـ API؟': 'نصمم واجهات برمجية لربط التطبيقات.',
    'كيف أحسن سرعة موقعي؟': 'نقدم تحسينات لأداء المواقع.',
    'هل تقدمون اختبار برمجيات؟': 'نعم، نقدم اختبار جودة للبرمجيات.',
    'شو التشفير؟': 'حماية البيانات بكود سري.',
    'هل تقدمون تحسين UX؟': 'نعم، نصمم تجربة مستخدم مثالية.',
    'شو الـ Blockchain؟': 'نقدم حلول بلوك تشين للأمان والعقود الذكية.',
    'كيف أبدأ مشروع؟': 'تواصلي معانا لتخطيط وتنفيذ مشروعك.',
    'هل تقدمون تحليل منافسين؟': 'نعم، نقدم تحليل السوق والمنافسين.',
    'شو الـ CRM؟': 'نقدم أنظمة إدارة علاقات العملاء.',
    'هل تقدمون تطبيقات ويب؟': 'نعم، نطور تطبيقات ويب متقدمة.',
    'شو الـ ERP؟': 'نقدم أنظمة تخطيط موارد المؤسسات.',
    'كيف أسوق لتطبيقي؟': 'نقدم استراتيجيات تسويق للتطبيقات.',
    'هل تقدمون تحديثات؟': 'نعم، نقدم تحديثات دورية للبرمجيات.',
    'شو الـ Big Data؟': 'نحلل كميات كبيرة من البيانات.',
    'كيف أحمي شبكتي؟': 'نقدم حلول جدار حماية وكشف التسلل.',
    'هل تقدمون تطوير Backend؟': 'نعم، نطور أنظمة خلفية قوية.',
    'شو الـ Frontend؟': 'نصمم واجهات أمامية متجاوبة.',
    'خدماتنا': 'نقدم تطوير برمجيات، أمن سيبراني، استشارات، تسويق رقمي، تطوير ألعاب، خدمات سحابية، وأكثر.',
    'الأسعار': 'الأسعار تبدأ من 10 يورو، تواصلي لتفاصيل.',
    'الدعم الفني': 'دعمنا 24/7 عبر info@company.com.',
    'الأمن السيبراني': 'نقدم حماية وفحص ثغرات.',
    'استشارات': 'استشارات في الأمن، التقنيات، والتسويق الرقمي.',
    'اتصل بنا': 'تواصلي عبر info@company.com أو +49-30-123456.',
    'التسويق الرقمي': 'نقدم SEO، إعلانات، وإدارة وسائل التواصل الاجتماعي.',
    'تطوير الألعاب': 'نصمم ألعاب للأندرويد، iOS، والويب.',
    'إدارة المشاريع': 'نساعدك في تخطيط وتنفيذ مشاريعك باستخدام Jira.',
    'خدمات السحابة': 'نقدم تخزين سحابي وتحليلات بيانات.',
    'تصميم واجهات': 'نصمم واجهات مستخدم UI/UX عصرية.',
    'تصميم مواقع': 'نصمم مواقع إلكترونية متجاوبة وسريعة.',
    'الذكاء الاصطناعي': 'نقدم حلول ذكاء اصطناعي مثل الروبوتات.',
    'تطبيقات موبايل': 'نطور تطبيقات للأندرويد وiOS.',
    'تحليل البيانات': 'نحلل البيانات لتحسين أداء الشركات.',
    'حماية البيانات': 'نستخدم تشفير متقدم وجدران حماية.',
    'استضافة': 'نقدم استضافة مواقع وخوادم آمنة.',
    'devops': 'نقدم خدمات DevOps لتسريع التطوير.',
    'تدريب تقني': 'نقدم دورات في البرمجة والأمن السيبراني.',
    'إنترنت الأشياء': 'نطور حلول IoT لربط الأجهزة.',
    'دعم متعدد اللغات': 'ندعم تطبيقات متعددة اللغات.',
    'الواقع الافتراضي': 'نطور تطبيقات واقع افتراضي VR.',
    'صيانة': 'نقدم صيانة دورية للأنظمة والمواقع.',
    'api': 'نصمم واجهات برمجية لربط التطبيقات.',
    'تحسين سرعة الموقع': 'نقدم تحسينات لأداء المواقع.',
    'اختبار برمجيات': 'نقدم اختبار جودة للبرمجيات.',
    'التشفير': 'نحمي البيانات بكود سري.',
    'تحسين ux': 'نصمم تجربة مستخدم مثالية.',
    'blockchain': 'نقدم حلول بلوك تشين للأمان.',
    'بدء مشروع': 'تواصلي لتخطيط وتنفيذ مشروعك.',
    'تحليل منافسين': 'نقدم تحليل السوق والمنافسين.',
    'crm': 'نقدم أنظمة إدارة علاقات العملاء.',
    'تطبيقات ويب': 'نطور تطبيقات ويب متقدمة.',
    'erp': 'نقدم أنظمة تخطيط موارد المؤسسات.',
    'تسويق التطبيقات': 'نقدم استراتيجيات تسويق للتطبيقات.',
    'تحديثات': 'نقدم تحديثات دورية للبرمجيات.',
    'big data': 'نحلل كميات كبيرة من البيانات.',
    'حماية الشبكة': 'نقدم حلول جدار حماية وكشف التسلل.',
    'تطوير backend': 'نطور أنظمة خلفية قوية.',
    'frontend': 'نصمم واجهات أمامية متجاوبة.',
    'seo': 'نحسن محركات البحث لزيادة الزوار.',
    'تطوير 3d': 'نطور ألعاب وتطبيقات 3D.',
    'أدوات إدارة المشاريع': 'نستخدم Jira وTrello لإدارة المشاريع.',
    'تحليلات سحابية': 'نقدم تحليلات بيانات سحابية.',
    'حماية الألعاب': 'نحمي الألعاب من القرصنة.',
    'إدارة وسائل التواصل': 'ندير حسابات وسائل التواصل.',
    'إعلانات مدفوعة': 'نقدم إعلانات Google وFacebook.',
    'تخطيط الموارد': 'نقدم أنظمة ERP مخصصة.',
    'تحسين الأداء': 'نحسن أداء المواقع والتطبيقات.',
    'عقود ذكية': 'نطور عقود ذكية بـ Blockchain.'
  };

  const normalizeInput = (input) => input.replace(/[\u061f]/g, '').trim().toLowerCase();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const config = {
    initialMessages: messages,
    botName: 'روبوت المحادثة',
    customStyles: {
      botMessageBox: { backgroundColor: '#e0e0e0' },
      chatButton: { backgroundColor: '#007bff' }
    }
  };

  const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
      const normalizedInput = normalizeInput(message);
      const reply = faqResponses[normalizedInput] || 'عذرًا، لم أفهم.';
      actions.handleMessage(reply);
    };
    return <div>{children({ parse })}</div>;
  };

  const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleMessage = (message) => {
      const botMessage = createChatBotMessage(message);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage]
      }));
      setMessages((prev) => [...prev, botMessage]);
    };
    return <div>{children({ handleMessage })}</div>;
  };

  const handleQuickReply = (reply) => {
    const userMessage = { id: messages.length + 1, message: reply, type: 'user' };
    setMessages([...messages, userMessage]);
    const normalizedReply = normalizeInput(reply);
    const botReply = faqResponses[normalizedReply] || 'عذرًا، لم أفهم.';
    setTimeout(() => {
      const botMessage = { id: messages.length + 2, message: botReply, type: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
      scrollToBottom();
    }, 500);
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { id: messages.length + 1, message: input, type: 'user' };
    setMessages([...messages, userMessage]);
    const normalizedInput = normalizeInput(input);
    const botReply = faqResponses[normalizedInput] || 'عذرًا، لم أفهم.';
    setTimeout(() => {
      const botMessage = { id: messages.length + 2, message: botReply, type: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
      scrollToBottom();
    }, 500);
    setInput('');
  };

  const handleCloseChatbot = () => {
    setIsVisible(false);
  };

  const handleClearConversation = () => {
    setMessages([{ id: 1, message: 'مرحبًا بك! كيف أساعدك اليوم؟', type: 'bot' }]);
    setInput('');
  };

  if (!isVisible) {
    return (
      <button
        className="chatbot-toggle-button"
        onClick={() => setIsVisible(true)}
      >
        🗨️
      </button>
    );
  }

  return (
    <div className="chat-bot">
      <div className="chat-header">
        <span className="chat-title">روبوت المحادثة</span>
        <div className="chat-header-buttons">
          <button
            className="clear-button"
            onClick={handleClearConversation}
            title="مسح المحادثة"
          >
            🗑️
          </button>
          <button
            className="close-button"
            onClick={handleCloseChatbot}
            title="إغلاق"
          >
            ✕
          </button>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.type === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {msg.message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="quick-replies">
        {quickReplies.map((reply) => (
          <button
            key={reply}
            className="quick-reply"
            onClick={() => handleQuickReply(reply)}
          >
            {reply}
          </button>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="اكتب سؤالك هنا..."
        />
        <button onClick={handleSendMessage}>إرسال</button>
      </div>
    </div>
  );
}

export default ChatBot;