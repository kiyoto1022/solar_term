'use strict';

function solar_term(now) {
  const SOLAR_TERM = [
    {month: 1, date: 5, name:"小寒", name_kana: "しょうかん", description: "池や川の氷も厚みを増し、寒さが厳しくなる頃です。この日を「寒の入り」といい、寒さの始まりを意味します。そして、小寒と大寒を合わせたおよそ1か月を「寒中」「寒の内」といい、寒中見舞いを出す時期とされています"},
    {month: 1, date:20, name:"大寒", name_kana: "だいかん", description: "冷え込みもはげしく、寒さが最も厳しい頃。二十四節気の最後の節気で、ここを乗り切れば春近しということです。寒気を利用した食物（凍り豆腐、寒天、酒、味噌など）を仕込む時期にもあたります"},
    {month: 2, date: 4, name:"立春", name_kana: "りっしゅん", description: "二十四節気の最初の節気で、この日から暦の上では春となり、さまざまな決まりごとや節目の基準になっています。旧暦では立春近くに正月がめぐってきたので、立春は春の始まりであり、1年の始まりでもありました。まだまだ寒さは厳しいですが、立春を過ぎてから初めて吹く強い南風を「春一番」といいます"},
    {month: 2, date:19, name:"雨水", name_kana: "うすい", description: "雪から雨へと変わり、降り積もった雪も溶けだす頃という意味です。実際にはまだ雪深いところも多く、これから雪が降り出す地域もありますが、ちろちろと流れ出す雪溶け水に、春の足音を感じます"},
    {month: 3, date: 6, name:"啓蟄", name_kana: "けいちつ", description: "大地が温まって、冬ごもりから目覚めた虫が、穴をひらいて顔を出す頃。「啓」はひらく、「蟄」は土の中にとじこもっていた虫（蛙や蛇）という意味です。ひと雨ごとに暖かくなり、日差しも春めいて、生き物が再び活動し始めます"},
    {month: 3, date:21, name:"春分", name_kana: "しゅんぶん", description: "昼夜の長さがほぼ同じになる日で、この日を境に陽が延びていきます。春分の日は彼岸の中日で前後3日間を春彼岸といい、先祖のお墓参りをする習慣があります。「自然をたたえ、生物をいつくしむ」として国民の祝日になっています"},
    {month: 4, date: 5, name:"清明", name_kana: "せいめい", description: "清明は「清浄明潔」の略で、万物がけがれなく清らかで生き生きしているという意味です。花が咲き、鳥は歌い、空は青く澄み、爽やかな風が吹き、すべてのものが春の息吹を謳歌する頃。各地でお花見シーズンを迎えます"},
    {month: 4, date:20, name:"穀雨", name_kana: "こくう", description: "春の柔らかな雨に農作物がうるおうという意味です。この時期に農作物の種をまくと、雨に恵まれ、よく成長するといわれています"},
    {month: 5, date: 6, name:"立夏", name_kana: "りっか", description: "この日から立秋の前日までが暦の上では夏となります。新緑に彩られ、さわやかな晴天が続く頃です。ちょうどゴールデンウィークの時期にあたり、レジャーに出かけるにもよい気候です"},
    {month: 5, date:21, name:"小満", name_kana: "しょうまん", description: "陽気がよくなり草木が成長して茂るという意味です。農家では田植えの準備を始める頃。動物や植物にも活気があふれます。また、秋にまいた麦の穂が付くころで安心する（少し満足する）という意味もあります"},
    {month: 6, date: 6, name:"芒種", name_kana: "ぼうしゅ", description: "「芒」とはイネ科植物の穂先にある毛のような部分のことで、稲などの穀物の種をまく時期という意味です。田植えの目安とされ、農家が忙しくなる時期。梅雨入りも間近で少し蒸し暑くなってくる頃です"},
    {month: 6, date:21, name:"夏至", name_kana: "げし", description: "北半球では、太陽が最も高く昇り、１年で最も昼が長い日です。ただ、日本では梅雨のシーズンでもあるので、日照時間が短く、あまりひの長さを実感できないかもしれません。暦の上では夏の折り返し地点にあたり、夏至を過ぎると暑さが増して本格的な夏がやってきます"},
    {month: 7, date: 7, name:"小暑", name_kana: "しょうしょ", description: "だんだん暑さが増していくという意味で、梅雨明けも近くなり、湿っぽさの中にも夏の熱気が感じられるようになります。海や山に出かけるのにもいい時期です。また、小暑と大暑を合わせたおよそ1か月を「暑中」といい、「暑中見舞い」を出す期間とされています"},
    {month: 7, date:23, name:"大暑", name_kana: "たいしょ", description: "夏の暑さが本格的になるという意味ですが、子どもたちは夏休みに入ってわくわく。農家にとっては田の草取り、害虫駆除など暑い中での農作業が続く大変な時期です。また、土用の丑の日が近く、夏バテ防止にうなぎを食べたりする頃です"},
    {month: 8, date: 7, name:"立秋", name_kana: "りっしゅう", description: "厳しい残暑は続きますが、この日から暦の上では秋となります。これからは少しずつ涼しくなり、秋の気配が漂いだす頃です。また、立秋を過ぎたら「暑中見舞い」は「残暑見舞い」に変わります"},
    {month: 8, date:23, name:"処暑", name_kana: "しょしょ", description: "さがおさまるという意味で、日中は暑いものの、朝晩の涼しさに初秋の息遣いを感じる頃です。夏休みもそろそろ終わり。秋の台風シーズンに入っていきます"},
    {month: 9, date: 8, name:"白露", name_kana: "はくろ", description: "秋が深まり、草花に朝露がつきはじめる頃という意味です。空は高くなり、秋雲がたなびくようになり、本格的な秋の到来です。また、実りの秋を前に台風が心配な時期でもあります"},
    {month: 9, date:23, name:"秋分", name_kana: "しゅうぶん", description: "昼夜の長さがほぼ同じになる日で、この日を境に日が短くなり、秋の夜長に向かいます。秋分の日は彼岸の中日で前後3日間を秋彼岸といい、先祖のお墓参りをする習慣があります。「祖先を敬い、亡くなった人をしのぶ日」として国民の祝日になっています"},
    {month:10, date: 8, name:"寒露", name_kana: "かんろ", description: "草木に冷たい露が降りる頃という意味です。秋の長雨が終わり、ぐっと秋が深まります。稲刈りが終わるころで、その他の農作物の収穫もたけなわとなります。また、北の方から紅葉の便りが届きはじめます"},
    {month:10, date:23, name:"霜降", name_kana: "そうこう", description: "早朝に霜が降りはじめる頃という意味です。晩秋を迎え、北の方では朝霜が降り、山々は紅葉に染まります"},
    {month:11, date: 7, name:"立冬", name_kana: "りっとう", description: "この日から立春の前日までが暦の上では冬となります。木枯らしが吹き、冬の訪れを感じる頃。太陽の光が弱まって日も短くなり、木立ちの冬枯れが目立つようになります。木枯らしが吹くのは、冬型の気圧配置になった証拠です"},
    {month:11, date:22, name:"小雪", name_kana: "しょうせつ", description: "木々の葉が落ち、山には初雪が舞い始める頃です。「小雪」とは、冬とは言えまだ雪はさほど多くないという意味で、冬の入口にあたります"},
    {month:12, date: 7, name:"大雪", name_kana: "たいせつ", description: "山の峰々は雪をかぶり、平地にも雪が降る頃です。本格的な冬の到来で、動物たちも冬ごもりを始めます。年末に向け、お正月の準備も始まって、何かとあわただしい時期でもあります"},
    {month:12, date:22, name:"冬至", name_kana: "とうじ", description: "太陽が最も低い位置にあり、１年で最も夜が長く、昼が短い日です。太陽の力が一番弱まる日ですが、翌日からは再び強まるということから、運が向いてくるとされています。また、冬至かぼちゃ、冬至がゆ、柚子湯などで、厄払いや無病息災を願う風習があります"},
  ];
  
  var index = SOLAR_TERM.findIndex(season => {
    if (new Date(now.getFullYear(), season.month -1, season.date) > now) {
      return season;
    }
  });
  return (index <= 0) ? SOLAR_TERM[SOLAR_TERM.length -1] : SOLAR_TERM[index - 1];
}

function say(date, season) {
  return `${date.getMonth() + 1}月${date.getDate()}日は、${season.name_kana}の季節です。${season.description}`;
}

const functions = require('firebase-functions');
const { dialogflow } = require('actions-on-google');

const app = dialogflow();

app.intent('One More', conv => {
    const season = conv.contexts.get("season");
    if (typeof season === 'undefined') {
      conv.ask("二度は申し上げられません。");
    } else {
      conv.ask(season.parameters.say);
    }
});

app.intent('Default Welcome Intent', conv => {
    var answer = say(new Date(), solar_term(new Date()));
    conv.contexts.set("season", 1, {say: answer});
    conv.ask(answer);
});

app.intent('Another Date', (conv, params) => {
    const answer = say(new Date(params.date), solar_term(new Date(params.date)));
    conv.contexts.set("season", 1, {say: answer});
    conv.ask(answer);
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
