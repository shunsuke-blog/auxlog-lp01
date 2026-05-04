# Claude Code 実装指示書 - Auxlog LP

## この指示書の使い方
上から順番に実装すること。各STEPが完了したら次に進む。

---

## 前提条件

- **リポジトリ名**: `auxlog-lp`（新規作成）
- **ドメイン**: `auxlog.com`
- **フレームワーク**: Next.js 14（App Router）
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript
- **ホスティング**: Vercel（auxlog-appとは別プロジェクト）

### カラーパレット（必ず守ること）
```css
--bg-primary: #0A0A0A;
--bg-card: #141414;
--border: #222222;
--text-primary: #FFFFFF;
--text-sub: #888888;
--accent: #E8FF00;
```

### デザイン原則
- 黒背景ベース、余白を広く取る
- 見出しは極太（font-weight: 900）、インパクト重視
- 「Appleの純正アプリと並べて恥ずかしくないか」を基準にする
- モバイルファースト（375px〜）

---

## STEP 1: プロジェクト作成

```bash
npx create-next-app@latest auxlog-lp --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd auxlog-lp
```

`tailwind.config.ts` を以下に更新する:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'media',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0A',
        'bg-card': '#141414',
        'border-default': '#222222',
        'text-sub': '#888888',
        'accent': '#E8FF00',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

**✅ STEP 1 完了確認**: `npm run dev` でエラーなく起動することを確認。

---

## STEP 2: レイアウトとグローバルスタイルの設定

### 2-1. `src/app/layout.tsx`

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auxlog - 今日のトレーニングを、30秒で決める。',
  description: '筋トレ中級者・上級者向けの自動メニュー提案アプリ。前回の記録から今日やるべき重量・セット数を自動計算。30日間無料で試せる。',
  openGraph: {
    title: 'Auxlog - 今日のトレーニングを、30秒で決める。',
    description: '筋トレ中級者・上級者向けの自動メニュー提案アプリ。前回の記録から今日やるべき重量・セット数を自動計算。30日間無料で試せる。',
    url: 'https://auxlog.com',
    siteName: 'Auxlog',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-[#0A0A0A] text-white`}>
        {children}
      </body>
    </html>
  )
}
```

### 2-2. `src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    background-color: #0A0A0A;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
  }
}
```

---

## STEP 3: コンポーネントの作成

### 3-1. CTAボタンコンポーネント
`src/components/CTAButton.tsx`:

```typescript
import Link from 'next/link'

type Props = {
  text?: string
  className?: string
}

export default function CTAButton({
  text = '30日間無料で始める',
  className = '',
}: Props) {
  return (
    <Link
      href="https://auxlog.app/login"
      className={`
        inline-flex items-center gap-2
        bg-[#E8FF00] text-black
        font-bold text-base
        px-8 py-4 rounded-full
        hover:bg-[#d4e800] transition-colors duration-200
        ${className}
      `}
    >
      {text}
      <span>→</span>
    </Link>
  )
}
```

### 3-2. ナビゲーションコンポーネント
`src/components/Nav.tsx`:

```typescript
import Link from 'next/link'
import CTAButton from './CTAButton'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#222222]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-black text-xl tracking-tight">
          Auxlog
        </Link>
        <CTAButton text="無料で始める" className="text-sm px-6 py-3" />
      </div>
    </nav>
  )
}
```

---

## STEP 4: メインページの実装

`src/app/page.tsx` を以下の仕様で実装する。

### 全体構造

```typescript
import Nav from '@/components/Nav'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import PricingSection from '@/components/sections/PricingSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
```

### 4-1. HeroSection
`src/components/sections/HeroSection.tsx`:

以下の仕様で実装する:
- `pt-32 pb-24` のパディング（ナビの高さ分を考慮）
- メインキャッチコピー（極太、大きいフォント）:
  ```
  今日のトレーニングを、
  30秒で決める。
  ```
- サブコピー（`text-[#888888]`）:
  ```
  感覚に頼ったトレーニングをやめろ。
  Auxlogが前回の記録から、今日やるべき重量・セット・回数を自動で導き出す。
  ```
- CTAボタン（`CTAButton`コンポーネント）
- 「30日間無料・クレジットカード不要」の補足テキスト（小さめ、`text-[#888888]`）
- モックアップ画像エリア（実際の画像がない場合は黒いカードのプレースホルダーでOK）

**タイポグラフィ仕様**:
- メインキャッチ: `text-5xl md:text-7xl font-black leading-tight`
- 「30秒」の部分に `text-[#E8FF00]` でアクセントカラーを使う

### 4-2. ProblemSection
`src/components/sections/ProblemSection.tsx`:

以下の仕様で実装する:
- セクションタイトル: 「こんな経験、ないか？」
- 3つの課題カード（背景: `#141414`、ボーダー: `#222222`）:

| アイコン | タイトル | 説明 |
|---------|---------|------|
| 🤔 | ジムに着いてから「今日何やろう」と悩む | 毎回メニューを考えることで、本来のトレーニングに集中できない |
| 🔁 | 感覚でやるからいつもベンチプレスばかり | 好きな種目に偏り、苦手な部位が置き去りになる |
| 📝 | 前回何キロ上げたか覚えていない | 記録がないから、重量を増やすタイミングがわからない |

### 4-3. SolutionSection
`src/components/sections/SolutionSection.tsx`:

以下の仕様で実装する:
- セクションタイトル: 「Auxlogが、考える時間をゼロにする。」
- 説明テキスト:
  ```
  前回の記録・疲労度・経過日数から、
  今日やるべきメニューを自動で計算。
  アプリを開いた瞬間に答えが出ている。
  ```
- `text-[#E8FF00]` でキーワードを強調（「自動で計算」「アプリを開いた瞬間」など）

### 4-4. FeaturesSection
`src/components/sections/FeaturesSection.tsx`:

以下の仕様で実装する:
- セクションタイトル: 「なぜAuxlogか」
- 3つの機能カード:

| アイコン | タイトル | 説明 |
|---------|---------|------|
| ⚡ | 開いた瞬間に今日のメニューが出る | 前回の記録をもとに、重量・セット数・回数を自動で提案。悩む時間はゼロ。 |
| 📈 | 感覚ではなく、データで伸ばす | RIR（余裕度）と週ボリュームに基づいたプログレッシブオーバーロードで、確実に成長できる重量を提案。 |
| ✓ | 30秒で記録完了 | 提案値が初期値として入力済み。変更がなければそのまま保存するだけ。 |

### 4-5. HowItWorksSection
`src/components/sections/HowItWorksSection.tsx`:

以下の仕様で実装する:
- セクションタイトル: 「使い方は、シンプル。」
- 3ステップ（番号を `text-[#E8FF00]` で強調）:

| ステップ | タイトル | 説明 |
|---------|---------|------|
| 01 | 種目を選ぶ | ベンチプレス、スクワットなど、自分がやる種目をタップで選択。 |
| 02 | 毎朝アプリを開く | 今日やるべき種目・重量・セットが自動で表示される。 |
| 03 | 記録して成長する | トレーニング後に結果を入力。次回への提案がさらに精度を上げる。 |

### 4-6. PricingSection
`src/components/sections/PricingSection.tsx`:

以下の仕様で実装する:
- セクションタイトル: 「シンプルな料金体系」
- 料金カード（中央配置、`border border-[#E8FF00]`で強調）:
  - 「30日間無料トライアル」バッジ（`bg-[#E8FF00] text-black`）
  - 料金: `¥480 / 月`（大きく表示）
  - 「トライアル終了後から課金開始」の説明
  - 機能リスト（チェックマーク付き）:
    - 自動メニュー提案（無制限）
    - トレーニング記録（無制限）
    - 重量推移グラフ
    - 科学的プログレッシブオーバーロード
  - CTAボタン

### 4-7. CTASection
`src/components/sections/CTASection.tsx`:

以下の仕様で実装する:
- 黒背景に大きなキャッチコピー（中央配置）
- キャッチ: 「まだ、感覚でやるのか。」（極太）
- サブコピー: 「30日間、無料で試してみろ。」
- CTAボタン（大きめ）

---

## STEP 5: フッターの実装

`src/components/Footer.tsx`:

```typescript
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#222222] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-white font-black text-xl">Auxlog</span>
          <div className="flex gap-8 text-[#888888] text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              利用規約
            </Link>
            <a href="mailto:support@auxlog.com" className="hover:text-white transition-colors">
              お問い合わせ
            </a>
          </div>
          <p className="text-[#888888] text-sm">
            © 2026 Auxlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
```

---

## STEP 6: プライバシーポリシーページの実装

`src/app/privacy/page.tsx`:

以下の内容でプライバシーポリシーページを実装する。

**ページ構成**:
- ナビゲーション（`Nav`コンポーネント）
- コンテンツエリア（`max-w-3xl mx-auto px-6 pt-32 pb-24`）
- フッター（`Footer`コンポーネント）

**記載内容**:

```
プライバシーポリシー

最終更新日：2026年5月

1. はじめに
Auxlog（以下「本サービス」）は、ユーザーのプライバシーを尊重し、
個人情報の保護に努めます。

2. 収集する情報
- メールアドレス（Google認証を通じて取得）
- トレーニング記録データ（種目・重量・セット数・回数・疲労度）
- サービス利用ログ

3. 情報の利用目的
- サービスの提供・改善
- メニュー提案機能の精度向上
- カスタマーサポート対応

4. 第三者への提供
収集した個人情報は、以下のサービス提供に必要な範囲で第三者に提供します：
- Supabase（データベース・認証）
- Stripe（決済処理）
- Vercel（ホスティング）

5. Cookieの使用
本サービスは認証状態の維持のためCookieを使用します。

6. 情報の保管と削除
アカウント削除時に、関連する個人情報を削除します。

7. お問い合わせ
support@auxlog.com
```

---

## STEP 7: 利用規約ページの実装

`src/app/terms/page.tsx`:

以下の内容で利用規約ページを実装する。（プライバシーポリシーと同じレイアウト）

**記載内容**:

```
利用規約

最終更新日：2026年5月

1. サービス概要
Auxlogは、筋トレ記録・自動メニュー提案を提供するWebアプリケーションです。

2. 利用資格
13歳以上の方がご利用いただけます。

3. 料金・支払い
- 月額¥480（税込）
- 30日間の無料トライアルあり
- トライアル終了後、自動的に月額プランに移行します
- 解約はいつでも可能です

4. 禁止事項
- 本サービスの不正利用
- 他のユーザーへの迷惑行為
- リバースエンジニアリング

5. 免責事項
本サービスのトレーニング提案はあくまで参考情報です。
怪我等については責任を負いかねます。

6. サービスの変更・終了
事前通知の上、サービス内容の変更・終了を行う場合があります。

7. 準拠法・管轄裁判所
日本法に準拠し、名古屋地方裁判所を第一審の専属的合意管轄裁判所とします。

8. 運営者
個人開発者：吉田 峻佑
連絡先：support@auxlog.com
```

---

## STEP 8: デプロイ

1. GitHubに `auxlog-lp` リポジトリを作成してプッシュ
2. Vercelで新規プロジェクトを作成（`auxlog-lp`）
3. `auxlog.com` と `www.auxlog.com` をこのプロジェクトに紐づける
4. お名前ドットコムのDNS設定で `auxlog.com` のAレコードをVercelの新IPに更新

---

## 注意事項

- `auxlog-app`（アプリ本体）とは完全に別リポジトリ・別Vercelプロジェクト
- CTAボタンのリンク先は必ず `https://auxlog.app/login`
- インラインスタイルを使わない（Tailwind CSSクラスのみ）
- コメントは日本語で書く
- `any`型を使わない
