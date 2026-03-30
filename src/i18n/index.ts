import { createI18n } from 'vue-i18n'

const messages = {
    // --- ENGLISH ---
    en: {
        nav: {
            home: 'Home',
            projects: 'Projects',
            experience: 'Experience',
            skills: 'Skills',
            contact: 'Contact',
            hire: 'Hire Me'
        },
        hero: {
            badge: 'Fullstack Web Developer',
            greeting: 'Made Aditya',
            surname: 'Prayoga.',
            description: 'A developer combining {minimalist} with {performance}.',
            minimalist: 'minimalist aesthetics',
            performance: 'maximum performance',
            cta_talk: 'Let\'s Talk',
            cta_work: 'View Projects',
            scroll: 'Scroll Down'
        },
        section: {
            projects: 'Selected Work',
            experience: 'Experience',
            skills: 'Skill Set',
            contact: 'Get In Touch'
        },
        experience: {
            instiki: {
                role: 'Cyber Security Researcher',
                desc: 'Conducting cyber security research and developing security systems for institutional operational websites.'
            },
            timedoor: {
                role: 'Fullstack Web Developer Internship',
                desc: 'Deepening web development skills using Vue.js and Laravel while learning industry-standard workflows.'
            },
            badung: {
                role: 'Data Entry Specialist',
                desc: 'Responsible for data entry and verification within the local government information systems.'
            }
        },
        contact: {
            title: 'Let\'s talk about your',
            highlight: 'next great project.',
            desc: 'Have a question or want to collaborate? I am always open to new discussions.',
            form: {
                name: 'Full Name',
                name_placeholder: 'Your Name',
                email: 'Email Address',
                message: 'Message',
                message_placeholder: 'Write your message here...',
                send: 'Send Message',
                sending: 'Sending...',
                success: 'Thank you {name}, your message has been sent!'
            }
        },
        projects: {
            timeclip: { desc: 'AI video clipping platform to simplify short-form content creation.' },
            kodyakost: { desc: 'Boarding house search integrated with local culture and activities.' },
            wazuh: { desc: 'Intrusion detection system using Wazuh SIEM for IT infrastructure.' },
            vintage: { desc: 'Vintage marketplace featuring full transactions and reviews.' }
        },
        footer: {
            cta_title: 'Have a great idea?',
            cta_highlight: 'Let’s make it happen.',
            btn_email: 'Send Email',
            btn_copy: 'Copy Contact',
            btn_copied: 'Copied!',
            credit_sub: 'Digital Craftsman based in Indonesia'
        }
    },

    // --- INDONESIA ---
    id: {
        nav: {
            home: 'Beranda',
            projects: 'Proyek',
            experience: 'Pengalaman',
            skills: 'Keahlian',
            contact: 'Kontak',
            hire: 'Hubungi Saya'
        },
        hero: {
            badge: 'Fullstack Web Developer',
            greeting: 'Made Aditya',
            surname: 'Prayoga.',
            description: 'Seorang pengembang yang menggabungkan {minimalist} dengan {performance}.',
            minimalist: 'estetika minimalis',
            performance: 'performa maksimal',
            cta_talk: 'Ayo Diskusi!',
            cta_work: 'Lihat Proyek',
            scroll: 'Gulir ke Bawah'
        },
        section: {
            projects: 'Proyek Terpilih',
            experience: 'Pengalaman',
            skills: 'Keahlian Utama',
            contact: 'Hubungi Saya'
        },
        experience: {
            instiki: {
                role: 'Cyber Security Researcher',
                desc: 'Melakukan penelitian terkait keamanan siber dan pengembangan sistem keamanan pada website operasional institusi.'
            },
            timedoor: {
                role: 'Fullstack Web Developer Internship',
                desc: 'Memperdalam skill pengembangan web menggunakan Vue.js dan Laravel serta mempelajari workflow standar industri.'
            },
            badung: {
                role: 'Data Entry Specialist',
                desc: 'Bertanggung jawab dalam input dan verifikasi data administratif pada sistem informasi pemerintah daerah.'
            }
        },
        contact: {
            title: 'Mari bicara tentang',
            highlight: 'proyek hebat selanjutnya.',
            desc: 'Apakah kamu punya pertanyaan atau ingin berkolaborasi? Saya selalu terbuka untuk diskusi baru.',
            form: {
                name: 'Nama Lengkap',
                name_placeholder: 'Masukkan Nama Anda',
                email: 'Alamat Email',
                message: 'Pesan',
                message_placeholder: 'Tulis pesanmu di sini...',
                send: 'Kirim Pesan',
                sending: 'Mengirim...',
                success: 'Terima kasih {name}, pesan kamu telah terkirim!'
            }
        },
        projects: {
            timeclip: { desc: 'Platform clipping video AI untuk mempermudah pembuatan konten video pendek.' },
            kodyakost: { desc: 'Pencarian kost yang terintegrasi dengan info budaya dan kegiatan lokal.' },
            wazuh: { desc: 'Sistem deteksi intrusi menggunakan Wazuh SIEM untuk infrastruktur IT.' },
            vintage: { desc: 'Marketplace barang vintage dengan fitur transaksi dan ulasan lengkap.' }
        },
        footer: {
            cta_title: 'Punya ide hebat?',
            cta_highlight: 'Ayo kita wujudkan.',
            btn_email: 'Kirim Email',
            btn_copy: 'Salin Kontak',
            btn_copied: 'Tersalin!',
            credit_sub: 'Digital Craftsman berbasis di Indonesia'
        }
    },

    // --- JAPANESE ---
    jp: {
        nav: {
            home: 'ホーム',
            projects: 'プロジェクト',
            experience: '経歴',
            skills: 'スキル',
            contact: 'お問い合わせ',
            hire: '採用する'
        },
        hero: {
            badge: 'フルスタックエンジニア',
            greeting: 'アディト',
            surname: 'プラヨガ。',
            description: '{minimalist}と{performance}を融合させるエンジニア。',
            minimalist: 'ミニマリズムの美学',
            performance: '最高のパフォーマンス',
            cta_talk: '話しましょう',
            cta_work: '実績を見る',
            scroll: 'スクロール'
        },
        section: {
            projects: '主な実績',
            experience: '職務経歴',
            skills: 'スキルセット',
            contact: 'お問い合わせ'
        },
        experience: {
            instiki: {
                role: 'サイバーセキュリティ研究員',
                desc: '機関の運用システムにおける脆弱性診断とセキュリティフレームワークの開発を担当。'
            },
            timedoor: {
                role: 'フルスタックエンジニア（インターン）',
                desc: 'Vue.jsとLaravelを使用したWeb開発スキルの向上と業界標準のワークフローの習得。'
            },
            badung: {
                role: 'データ入力スペシャリスト',
                desc: '地方自治体の情報システム内でのデータ入力および検証業務を担当。'
            }
        },
        contact: {
            title: 'あなたの',
            highlight: '素晴らしいプロジェクトについて。',
            desc: 'ご質問やコラボレーションのご提案はありますか？いつでもお待ちしております。',
            form: {
                name: '氏名',
                name_placeholder: 'お名前を入力してください',
                email: 'メールアドレス',
                message: 'メッセージ',
                message_placeholder: 'こちらにメッセージを入力してください...',
                send: 'メッセージを送信',
                sending: '送信中...',
                success: 'ありがとうございました、{name}さん。メッセージは送信されました！'
            }
        },
        projects: {
            timeclip: { desc: '短編動画制作を簡素化するAI動画クリッピングプラットフォーム。' },
            kodyakost: { desc: '地域の文化や活動と統合された下宿検索プラットフォーム。' },
            wazuh: { desc: 'ITインフラストラクチャ向けのWazuh SIEM統合侵入検知システム。' },
            vintage: { desc: '完全な取引とレビュー機能を備えたヴィンテージマーケットプレイス。' }
        },
        footer: {
            cta_title: '素晴らしいアイデアをお持ちですか？',
            cta_highlight: '一緒に実現しましょう。',
            btn_email: 'メールを送る',
            btn_copy: '連絡先をコピー',
            btn_copied: 'コピーしました！',
            credit_sub: 'インドネシアを拠点とするデジタル職人'
        }
    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'id',
    fallbackLocale: 'en',
    messages,
})

export default i18n