const links = {
  official: 'https://www.shunsenwaraku-sanai.com/',
  reserve: 'https://res-reserve.com/ja/restaurants/shunsenwaraku-sanai',
  map: 'https://maps.app.goo.gl/dkfrYTbUwqKEpBkZ7',
  instagram: 'https://www.instagram.com/sanai__official/',
  tabelog: 'https://tabelog.com/osaka/A2701/A270202/27041729/',
  gurunavi: 'https://syunsenwaraku-sanai.gorp.jp/',
  facebook: 'https://www.facebook.com/osaka.minami.sanai.official/'
};

const facts = [
  ['店名', '旬鮮和楽 さな井（しゅんせんわらく さない）'],
  ['業態', '日本料理・割烹・会席料理'],
  ['住所', '〒542-0083 大阪府大阪市中央区東心斎橋2-2-11 日宝セブンセンタービル1F'],
  ['電話番号', '06-6214-0371'],
  ['営業時間', '18:00～22:00（L.O.20:30）'],
  ['定休日', '月曜日、不定休有り'],
  ['総席数', '13席（カウンター5席、掘りごたつのお座敷8席）'],
  ['貸切', '10名様より可'],
  ['駐車場', '無し（近隣にコインパーキングあり）'],
  ['カード', 'VISA、Master、AMEX、JCB、Diners'],
  ['電子マネー', '不可']
];

const faqs = [
  ['旬鮮和楽 さな井はどこにありますか？', '大阪府大阪市中央区東心斎橋2-2-11、日宝セブンセンタービル1Fにあります。日本橋駅と長堀橋駅から徒歩4分、なんば駅から徒歩10分です。'],
  ['営業時間と定休日は？', '営業時間は18:00～22:00、料理のラストオーダーは20:30です。定休日は月曜日で、不定休もあります。直近の営業日は公式Instagramでもご確認ください。'],
  ['予約はどのようにできますか？', '公式WEB予約ページ、または電話（06-6214-0371）から予約できます。おまかせ会席は前日までの予約が案内されており、当日は電話でお問い合わせください。'],
  ['どのような料理を楽しめますか？', '近畿圏を中心とした旬の食材を用い、五味・五色・五感・五法を大切に組み立てる日本料理の会席です。暦や祭事、食材の走り・盛り・名残を献立と器で表現しています。'],
  ['おまかせ会席の内容は？', '前菜、温、涼、旬、お造り、お椀、焼肴、炊き合わせ、ご飯もの、水物など、全10品ほどの一例が公式サイトで案内されています。季節や仕入れで内容は変わります。'],
  ['子どもは入店できますか？', '保護者と同じ料理コースを利用する場合に入店可能と公式サイトで案内されています。'],
  ['席の種類を教えてください。', '松の一枚板のカウンター5席と、琉球畳を使った掘りごたつのお座敷8席があります。貸切は10名から相談できます。'],
  ['Where is Shunsenwaraku Sanai?', 'It is on the first floor of Nippo Seven Center Building, 2-2-11 Higashi-Shinsaibashi, Chuo-ku, Osaka. Nipponbashi and Nagahoribashi stations are each about a four-minute walk away.'],
  ['How can I make a reservation?', 'Use the official online reservation page or call 06-6214-0371. Advance booking is requested for the omakase kaiseki course.'],
  ['What type of restaurant is Shunsenwaraku Sanai?', 'It is a Japanese restaurant and kappo in Higashi-Shinsaibashi, serving seasonal cuisine as a kaiseki course.']
];

const areasJp = ['東心斎橋','日本橋','近鉄日本橋','長堀橋','なんば','難波','心斎橋','道頓堀','宗右衛門町','島之内','千日前','黒門市場','ミナミ','大阪市中央区','大阪市','大阪'];
const intentsJp = ['日本料理','割烹','会席料理','懐石料理','和食','ディナー','おまかせ会席','旬の料理','季節料理','日本酒','和牛料理','魚料理','予約','WEB予約'];
const jpKeywords = [
  '旬鮮和楽 さな井','旬鮮和楽さな井','旬鮮和樂 さな井','しゅんせんわらく さない','さな井 大阪','さな井 東心斎橋','さな井 日本橋','さな井 長堀橋','Shunsenwaraku Sanai','旬鮮和楽 さな井 予約','旬鮮和楽 さな井 電話','旬鮮和楽 さな井 営業時間','旬鮮和楽 さな井 定休日','旬鮮和楽 さな井 住所','旬鮮和楽 さな井 アクセス','旬鮮和楽 さな井 メニュー','旬鮮和楽 さな井 会席','旬鮮和楽 さな井 コース','旬鮮和楽 さな井 Instagram','旬鮮和楽 さな井 Googleマップ',
  ...areasJp.flatMap(area => intentsJp.map(intent => `${area} ${intent}`))
].slice(0, 220);

const areasEn = ['Higashi Shinsaibashi','Nipponbashi','Kintetsu Nipponbashi','Nagahoribashi','Namba','Shinsaibashi','Dotonbori','Suoemoncho','Sennichimae','Kuromon Market','Minami Osaka','Chuo ward Osaka','central Osaka','Osaka'];
const intentsEn = ['Japanese restaurant','kappo restaurant','kaiseki restaurant','Japanese cuisine','omakase dinner','seasonal dining','dinner reservation','online booking','sake pairing','wagyu course','seasonal fish','fine Japanese dining','local dining','restaurant near station','Japanese dinner'];
const enKeywords = [
  'Shunsenwaraku Sanai','Shunsen Waraku Sanai','Shunsenwaraku Sanai Osaka','Shunsenwaraku Sanai reservation','Shunsenwaraku Sanai booking','Shunsenwaraku Sanai address','Shunsenwaraku Sanai phone number','Shunsenwaraku Sanai opening hours','Shunsenwaraku Sanai menu','Shunsenwaraku Sanai kaiseki','Shunsenwaraku Sanai omakase','Shunsenwaraku Sanai Google Maps','Shunsenwaraku Sanai Instagram','Sanai Japanese restaurant Osaka','Sanai Higashi Shinsaibashi','Japanese restaurant near Nipponbashi Station','Japanese restaurant near Nagahoribashi Station','Japanese restaurant near Namba Station','kaiseki near Shinsaibashi','Osaka restaurant reservation',
  ...areasEn.flatMap(area => intentsEn.map(intent => `${intent} ${area}`))
].slice(0, 220);

const restaurantLd = {
  '@context': 'https://schema.org', '@type': 'Restaurant',
  '@id': 'https://shunsenwaraku-sanai.vercel.app/#restaurant',
  name: '旬鮮和楽 さな井', alternateName: ['しゅんせんわらく さない','Shunsenwaraku Sanai'],
  description: '大阪市中央区東心斎橋で、旬の近畿食材を生かした日本料理を会席スタイルで提供する割烹。',
  url: 'https://shunsenwaraku-sanai.vercel.app/', telephone: '06-6214-0371', priceRange: '¥¥¥',
  servesCuisine: ['日本料理','割烹','会席料理','Japanese','Kaiseki'],
  address: { '@type': 'PostalAddress', postalCode: '542-0083', addressRegion: '大阪府', addressLocality: '大阪市中央区', streetAddress: '東心斎橋2-2-11 日宝セブンセンタービル1F', addressCountry: 'JP' },
  hasMap: links.map, acceptsReservations: links.reserve,
  sameAs: [links.official, links.instagram, links.facebook, links.tabelog, links.gurunavi],
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '18:00', closes: '22:00' }],
  paymentAccepted: 'Cash, VISA, Master, AMEX, JCB, Diners', seatingCapacity: 13
};
const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q,a]) => ({ '@type':'Question', name:q, acceptedAnswer:{ '@type':'Answer', text:a } })) };

function External({ href, children, className = '' }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true"> ↗</span></a>;
}

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    <header className="nav"><a className="logo" href="#top"><span>旬鮮和楽</span>さな井</a><nav><a href="#story">さな井の料理</a><a href="#course">会席</a><a href="#info">店舗情報</a><a href="#access">アクセス</a><a href="#faq">FAQ</a><a href="#english">English</a></nav><External className="navReserve" href={links.reserve}>ご予約</External></header>
    <main id="top">
      <section className="hero"><div className="heroMark" aria-hidden="true">旬</div><div className="heroCopy"><p className="kicker">JAPANESE CUISINE · HIGASHI-SHINSAIBASHI</p><h1><small>旬鮮和楽</small>さな井</h1><p className="roman">SHUNSENWARAKU SANAI</p><div className="heroLine"/><h2>旬にして鮮なり。<br/>和みありて、楽生まれ。</h2><p>大阪・東心斎橋。近畿圏の旬の食材と、四季の文化を映す会席料理を味わう日本料理・割烹です。</p><div className="actions"><External className="button gold" href={links.reserve}>WEB予約</External><a className="button outline" href="tel:0662140371">06-6214-0371</a></div></div><aside className="heroInfo"><span>営業時間</span><strong>18:00–22:00</strong><span>定休日</span><strong>月曜日・不定休</strong><span>最寄り</span><strong>日本橋 / 長堀橋<br/>各駅より徒歩4分</strong></aside></section>
      <section className="story" id="story"><div className="vertical">五味・五色・五感・五法</div><div><p className="sectionLabel">01　SANAI’S CUISINE</p><h2>食材の旬と、<br/>大阪の食文化を会席に。</h2></div><div className="storyText"><p>旬鮮和楽 さな井では、日本料理一筋40年以上の店主・長内敬之が、地産地消の精神で近畿圏の旬を見極め、会席スタイルの料理に仕立てます。</p><p>献立には暦や祭事を取り入れ、食材の「走り・盛り・名残」を大切に。五味・五色・五感・五法を軸に、季節の器とともに一皿ずつ表現しています。</p><div className="chips"><span>旬の近畿食材</span><span>日本料理</span><span>会席</span><span>季節の器</span></div></div></section>
      <section className="course" id="course"><div className="courseIntro"><p className="sectionLabel">02　OMAKASE KAISeki</p><h2>季節の色合いで彩る、<br/>おまかせ会席。</h2><p>月ごとの食材、暦や催事を取り入れて組み立てる全10品ほどの会席。お出汁の旨みと食材の出会いを大切にした献立です。</p></div><div className="courseCards"><article><span>STANDARD</span><h3>おまかせ会席</h3><strong>15,400円</strong><p>前菜、温、涼、旬、お造り、お椀、焼肴、炊き合わせ、ご飯もの、水物など。</p><small>2名様より／前日までの要予約<br/>別途サービス料10%</small></article><article><span>WAGYU</span><h3>和牛がメインのコース</h3><strong>19,800円</strong><p>ステーキ、ビフカツ、みぞれ煮など、ご要望に応じて和牛を用いた主菜を相談できます。</p><small>内容は予約時に店舗へご相談ください。</small></article><article><span>DRINK</span><h3>日本酒・焼酎・ワイン</h3><p>季節の日本酒を中心に、焼酎やワインも用意。料理との組み合わせを楽しめます。</p><small>日本酒 90ml 650円～<br/>焼酎 700円～／ワイン 1,200円～</small></article></div><p className="note">表示価格は税込。料理や価格は仕入れ等により変わる場合があります。最新内容は公式サイト・予約ページでご確認ください。</p><External className="textLink" href={links.reserve}>空席と最新コースを確認する</External></section>
      <section className="space"><div><p className="sectionLabel">03　SPACE</p><h2>料理人の所作まで<br/>愉しむ、和の空間。</h2></div><div className="spaceGrid"><article><i>一</i><h3>カウンター</h3><p>松の木の一枚板であつらえた5席。調理の様子を間近に感じられる席です。</p></article><article><i>二</i><h3>掘りごたつ</h3><p>琉球畳を使ったお座敷に8席。自然素材の温もりを感じる数奇屋造りの空間です。</p></article></div></section>
      <section className="info" id="info"><p className="sectionLabel">04　RESTAURANT INFORMATION</p><h2>店舗基本情報</h2><dl>{facts.map(([k,v]) => <div key={k}><dt>{k}</dt><dd>{k === '電話番号' ? <a href="tel:0662140371">{v}</a> : v}</dd></div>)}</dl><div className="sourceLinks"><External href={links.official}>公式サイト</External><External href={links.reserve}>公式WEB予約</External><External href={links.instagram}>Instagram</External><External href={links.facebook}>Facebook</External><External href={links.tabelog}>食べログ</External><External href={links.gurunavi}>ぐるなび</External></div></section>
      <section className="access" id="access"><div><p className="sectionLabel">05　ACCESS</p><h2>東心斎橋、<br/>日本橋と長堀橋の間。</h2><address>〒542-0083<br/>大阪府大阪市中央区東心斎橋2-2-11<br/>日宝セブンセンタービル1F</address><ul><li>大阪メトロ各線「日本橋駅」2番出口より徒歩4分</li><li>大阪メトロ各線「長堀橋駅」7番出口より徒歩4分</li><li>大阪メトロ各線「なんば駅」15-A出口より徒歩10分</li></ul><External className="button dark" href={links.map}>Google Mapsで開く</External></div><div className="mapArt" aria-label="東心斎橋の位置を表す装飾地図"><span className="road r1">堺筋</span><span className="road r2">長堀通</span><span className="road r3">千日前通</span><span className="station s1">長堀橋</span><span className="station s2">日本橋</span><span className="station s3">なんば</span><div className="pin">さな井</div></div></section>
      <section className="faq" id="faq"><p className="sectionLabel">06　FREQUENTLY ASKED QUESTIONS</p><h2>よくあるご質問</h2><div className="faqList">{faqs.map(([q,a],i) => <details key={q} open={i===0}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
      <section className="english" id="english"><p className="sectionLabel">07　ENGLISH GUIDE</p><div className="englishGrid"><div><h2>Shunsenwaraku<br/>Sanai</h2><p className="enLead">Seasonal Japanese kaiseki in Higashi-Shinsaibashi, Osaka.</p><p>Shunsenwaraku Sanai is a Japanese restaurant and kappo serving seasonal cuisine as an omakase kaiseki course. The chef draws on more than 40 years in Japanese cuisine, using seasonal ingredients with particular attention to produce from the Kinki region.</p><p>The restaurant has five counter seats and eight horigotatsu seats. Reservations can be made online or by phone.</p></div><dl><div><dt>CUISINE</dt><dd>Japanese cuisine, kappo and kaiseki</dd></div><div><dt>ADDRESS</dt><dd>Nippo Seven Center Building 1F,<br/>2-2-11 Higashi-Shinsaibashi, Chuo-ku,<br/>Osaka 542-0083, Japan</dd></div><div><dt>HOURS</dt><dd>18:00–22:00 (last order 20:30)<br/>Closed Mondays; irregular holidays may apply.</dd></div><div><dt>ACCESS</dt><dd>4 min from Nipponbashi Station Exit 2<br/>4 min from Nagahoribashi Station Exit 7<br/>10 min from Namba Station Exit 15-A</dd></div><div><dt>RESERVATIONS</dt><dd><External href={links.reserve}>Book online</External> or call <a href="tel:0662140371">06-6214-0371</a></dd></div><div><dt>MAP</dt><dd><External href={links.map}>Open Google Maps</External></dd></div></dl></div></section>
      <section className="keywords"><p className="sectionLabel">SEARCH GUIDE</p><h2>店舗・料理・周辺エリアの検索案内</h2><p>店名、東心斎橋・日本橋・長堀橋・なんば周辺、会席料理、予約など、旬鮮和楽 さな井を探す際に関連する語句です。</p><details><summary>日本語の関連語（{jpKeywords.length}語）</summary><p>{jpKeywords.join(' ／ ')}</p></details><details><summary>English search terms ({enKeywords.length} terms)</summary><p lang="en">{enKeywords.join(' · ')}</p></details></section>
      <section className="closing"><p>RESERVATION</p><h2>今宵の旬を、<br/>一皿ずつ。</h2><div className="actions"><External className="button gold" href={links.reserve}>WEB予約</External><a className="button outline light" href="tel:0662140371">06-6214-0371</a></div></section>
    </main>
    <footer><a className="logo" href="#top"><span>旬鮮和楽</span>さな井</a><p>〒542-0083 大阪府大阪市中央区東心斎橋2-2-11 日宝セブンセンタービル1F<br/><a href="tel:0662140371">06-6214-0371</a></p><p>Shunsenwaraku Sanai<br/>Higashi-Shinsaibashi, Osaka</p></footer>
  </>;
}
