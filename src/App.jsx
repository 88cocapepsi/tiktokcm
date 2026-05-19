import React, { useState } from 'react';

function App() {
  // Kho dữ liệu hệ thống mở rộng - Phủ kín 10 câu cho TẤT CẢ các sắc thái của TẤT CẢ các mục
  const commentData = {
    "Cuộc sống, lối sống": {
      "Cool / natural": [
        { en: "I like the way you live your life… what’s a normal day like for you?", es: "Me gusta cómo vives tu vida... ¿cómo es un día normal para ti?", ja: "あなたの生き方が好きです…普段はどんな一日過ごしていますか？" },
        { en: "You seem really balanced… how do you usually spend your days?", es: "Pareces muy equilibrado... ¿cómo sueles pasar tus días?", ja: "とてもバランスが取れているように見えます…普段はどう過ごしていますか？" },
        { en: "Your lifestyle looks peaceful… is that how you like to keep things?", es: "Tu estilo de vida se ve pacífico... ¿así es como te gusta mantener las cosas?", ja: "平和なライフスタイルですね…いつもそんな風に過ごすのが好きですか？" },
        { en: "You’ve got a good rhythm in life… what keeps you grounded like that?", es: "Tienes un buen ritmo de vida... ¿qué te mantiene con los pies en la tierra?", ja: "人生の良いリズムを持っていますね…何があなたをそうさせているのですか？" },
        { en: "Clean routine, love the pacing. Do you always keep it this organized?", es: "Rutina limpia, me encanta el ritmo. ¿Siempre lo mantienes así de organizado?", ja: "無駄のないルーティン、素晴らしいペースですね。いつもそうやって整えているのですか？" },
        { en: "You make daily life look effortless. Is this your ideal schedule?", es: "Haces que la vida diaria parezca sin esfuerzo. ¿Es este tu horario ideal?", ja: "日常を自然体でこなしていますね。これがあなたにとって理想的なスケジュールですか？" },
        { en: "Living on your own terms is a vibe. What’s your favorite hour of the day?", es: "Vivir bajo tus propios términos es genial. ¿Cuál es tu hora favorita del día?", ja: "マイペースに生きるって素敵ですね。一日の中で何時頃が一番好きですか？" },
        { en: "Solid habits. Did it take you a long time to build this lifestyle?", es: "Hábitos sólidos. ¿Te tomó mucho tiempo construir este estilo de vida?", ja: "確立された習慣ですね。このライフスタイルを築くのに時間はかかりましたか？" },
        { en: "Everything looks so intentional. Do you plan your days ahead?", es: "Todo parece tan intencional. ¿Planificas tus días con anticipación?", ja: "すべてに目的があるように見えます。一日の予定は事前に決める派ですか？" },
        { en: "Love the quiet focus in your routine. What's the main goal today?", es: "Me gusta el enfoque tranquilo de tu rutina. ¿Cuál es la meta principal de hoy?", ja: "ルーティンの静かな集中感がいいですね。今日の主な目標は何ですか？" }
      ],
      "Warm / genuine": [
        { en: "I really admire your lifestyle… what inspires you to live like this?", es: "Realmente admiro tu estilo de vida... ¿qué te inspira a vivir así?", ja: "あなたのライフスタイルに本当に憧れます…何がきっかけでこのような生活をしているのですか？" },
        { en: "You seem to have a healthy way of living… how did you build that habit?", es: "Pareces tener una forma de vida saludable... ¿cómo construiste ese hábito?", ja: "健康的な生き方をされていますね…どのようにしてその習慣を身につけたのですか？" },
        { en: "Your life looks simple but meaningful… what matters most to you?", es: "Tu vida parece simple pero significativa... ¿qué es lo que más te importa?", ja: "シンプルだけど意味のある人生に見えます…あなたにとって一番大切なものは何ですか？" },
        { en: "I like your energy, it feels positive… what do you do to stay like that?", es: "Me gusta tu energía, se siente positiva... ¿qué haces para mantenerte así?", ja: "あなたのポジティブなエネルギーが好きです…そうであり続けるために何をしていますか？" },
        { en: "Your daily posts always bring so much warmth. Hope you're having a good week!", es: "Tus publicaciones diarias siempre traen mucha calidez. ¡Espero que tengas una buena semana!", ja: "毎日の投稿から温かさが伝わります。今週も素敵な一週間になりますように！" },
        { en: "Seeing your routine makes me want to slow down and enjoy the small things.", es: "Ver tu rutina me hace querer bajar el ritmo y disfrutar de las pequeñas cosas.", ja: "あなたのルーティンを見ると、少し立ち止まって小さな幸せを楽しみたくなります。" },
        { en: "You treat yourself with so much kindness. What's one thing that brings you peace?", es: "Te tratas con tanta amabilidad. ¿Qué es lo único que te trae paz?", ja: "自分をとても大切にされていますね。あなたに一番心の安らぎをくれるものは何ですか？" },
        { en: "There's a beautiful honesty in how you live. Thanks for sharing this energy.", es: "Hay una hermosa honestidad en cómo vives. Gracias por compartir esta energía.", ja: "生き方に美しい誠実さを感じます。このポジティブなエネルギーを共有してくれてありがとう。" },
        { en: "Your morning ritual looks so healing. How do you start your perfect morning?", es: "Tu ritual matutino parece muy sanador. ¿Cómo empieza tu mañana perfecta?", ja: "朝のルーティンがとても癒やされます。最高の朝を迎えるためのコツはありますか？" },
        { en: "It feels like you truly appreciate every moment. Sending you good vibes!", es: "Siento que realmente aprecias cada momento. ¡Te envío buenas vibras!", ja: "一瞬一瞬を本当に大切にされている気がします。ハッピーなエネルギーを送ります！" }
      ],
      "Light flirt (subtle)": [
        { en: "I like your lifestyle… it’s attractive in a quiet way. What’s your daily routine like?", es: "Me gusta tu estilo de vida... es atractivo de una manera tranquila. ¿Cómo es tu rutina diaria?", ja: "あなたのライフスタイルが好きです…静かな魅力がありますね。普段のルーティンはどんな感じですか？" },
        { en: "There’s something about how you live… it’s kinda rare. How did you get there?", es: "Hay algo en cómo vives... es un poco raro. ¿Cómo llegaste ahí?", ja: "あなたの生き方には何か惹かれるものがあります…少し特別ですね。どうやってその境地に達したのですか？" },
        { en: "You make a simple life look really good… what’s your secret?", es: "Haces que una vida simple se vea muy bien... ¿cuál es tu secreto?", ja: "シンプルな生活をとても素敵に見せていますね…秘密は何ですか？" },
        { en: "Not gonna lie, your vibe is different… what keeps you this way?", es: "No voy a mentir, tu vibra es diferente... ¿qué te mantiene de esta manera?", ja: "正直、あなたの雰囲気 là 違いますね…何があなたをそうさせているのですか？" },
        { en: "Your lifestyle is incredibly charming. Do you ever take anyone along on your routines?", es: "Tu estilo de vida es increíblemente encantador. ¿Llevas a alguien contigo en tus rutinas?", ja: "ライフスタイルがとても魅力的です。そのルーティンに誰かを付き合わせることもありますか？" },
        { en: "You have a certain aesthetic that's hard to ignore. What do you do on weekends?", es: "Tienes una cierta estética que es difícil de ignorar. ¿Qué haces los fines de semana?", ja: "放っておけない独特なおしゃれさがありますね。週末は何をしているんですか？" },
        { en: "I can't tell what's cooler, your background or your vibe. Care to share your day?", es: "No sé qué es más genial, tu fondo o tu vibra. ¿Te gustaría compartir tu día?", ja: "背景とその雰囲気、どっちがカッコいいか選べないです。一日の様子を教えてくれる？" },
        { en: "You look like someone who knows all the best hidden spots in town.", es: "Pareces alguien que conoce todos los mejores lugares ocultos de la ciudad.", ja: "街 di 隠れた名店を全部知っていそうな雰囲気がありますね。" },
        { en: "Everything you do looks like a scene from a romance movie. Very magnetic.", es: "Todo lo que haces parece una escena de una película romántica. Muy magnético.", ja: "何をするにも恋愛映画の一コマみたい。crumbs すごく惹きつけられます。" },
        { en: "Your space reflects your personality—calm but totally captivating.", es: "Tu espacio refleja tu personalidad: tranquilo pero totalmente cautivador.", ja: "お部屋にあなたの性格が表れていますね。落ち着いているのに完全に魅了されます。" }
      ],
      "Playful": [
        { en: "Okay be honest… how are you this disciplined? What’s your routine?", es: "Vale, sé honesto... ¿cómo eres tan disciplinado? ¿Cuál es tu rutina?", ja: "正直に言って…どうしてそんなに規律正しいのですか？ルーティンは何ですか？" },
        { en: "You make life look easy. What do you actually do every day?", es: "Haces que la vida parezca fácil. ¿Qué haces realmente todos los días?", ja: "人生を簡単そうに見せていますね。実際、毎日何をしているのですか？" },
        { en: "This lifestyle looks too good… what’s the trick?", es: "Este estilo de vida se ve demasiado bien... ¿cuál es el truco?", ja: "このライフスタイルは素敵すぎます…コツは何ですか？" },
        { en: "Wait… are you always this put-together or just today?", es: "Espera... ¿siempre estás así de organizado o solo hoy?", ja: "待って…いつもそんなに完璧なのですか、それとも今日だけ？" },
        { en: "Can I rent your life for just one week? I promise I won't break anything.", es: "¿Puedo alquilar tu vida por solo una semana? Prometo no romper nada.", ja: "あなたの人生を1週間だけレンタルさせて！何も壊さないって約束するから。" },
        { en: "Your aesthetic is high tier. Did you hire a director for your life or what?", es: "Tu estética es de alto nivel. ¿Contrataste a un director para tu vida o qué?", ja: "日常のクオリティが高すぎます。人生の専属ディレクターでも雇っているの？" },
        { en: "Teach me how to be this fancy, my current routine is just napping.", es: "Enséñame a ser así de elegante, mi rutina actual es solo tomar siestas.", ja: "そんなにおしゃれに生きる方法`を教えて。私の今のルーティンは昼寝だけです。" },
        { en: "Are we living in the same world? My room looks like a disaster area right now.", es: "¿Vivimos en el mismo mundo? Mi habitación parece una zona de desastre ahora mismo.", ja: "私たちは本当に同じ世界に住んでる？私の部屋は今、大惨事になってるよ。" },
        { en: "This video gave me sudden motivation to clean my desk. Motivation lasted 2 minutes.", es: "Este video me dio motivación repentina para limpiar mi escritorio. Duró 2 minutos.", ja: "この動画を見て急に机を片付ける気になりました。やる気は2分で終わったけど。" },
        { en: "You've won the lifestyle game today. What's the prize for the viewers?", es: "Has ganado el juego del estilo de vida hoy. ¿Cuál es el premio para los espectadores?", ja: "今日のライフスタイル選手権、あなたの優勝です。視聴者へのプレゼントはある？" }
      ],
      "Deep / mysterious (idol vibe)": [
        { en: "There’s something calm about your life… what shaped that part of you?", es: "Hay algo tranquilo en tu vida... ¿qué formó esa parte de ti?", ja: "あなたの人生にはどこか落ち着きがあります…何があなたをそう形作ったのですか？" },
        { en: "Not everyone can live like this… what did you go through to get here?", es: "No todo el mundo puede vivir así... ¿por qué pasaste para llegar aquí?", ja: "誰でもこんな風に生きられるわけではありません…ここに来るまでにどんな経験をしたのですか？" },
        { en: "Your lifestyle feels intentional… what’s your philosophy in life?", es: "Tu estilo de vida se siente intencional... ¿cuál es tu filosofía de vida?", ja: "あなたのライフスタイルには意志を感じます…人生の哲学は何ですか？" },
        { en: "You seem to know what matters… how did you figure that out?", es: "Parece que sabes lo que importa... ¿cómo lo descubriste?", ja: "何が大切かを知っているようですね…どうやってそれを見つけたのですか？" },
        { en: "You carry a certain stillness with you. Is it hard to find people who understand it?", es: "Llevas una cierta quietud contigo. ¿Es difícil encontrar personas que la entiendan?", ja: "独特の静けさをまとっていますね。それを理解してくれる人に出会うのは難しいですか？" },
        { en: "There is poetry in your silence. Your videos don't need many words.", es: "Hay poesía en tu silencio. Tus videos no necesitan muchas palabras.", ja: "あなたの静けさには詩があります。動画に多くの言葉は必要ありませんね。" },
        { en: "You look like you're guarding a secret universe. Very enigmatic.", es: "Pareces estar guardando un universo secreto. Muy enigmático.", ja: "秘密の宇宙を守っているかのような雰囲気。とても神秘的です。" },
        { en: "It feels like you've detached from all the noise. How do you protect your mind?", es: "Se siente como si te hubieras desprendido de todo el ruido. ¿Cómo proteges tu mente?", ja: "すべての喧騒から切り離されているように見えます。どうやって自分の心を守っていますか？" },
        { en: "Your vibe belongs to late night thoughts and deep conversations.", es: "Tu vibra pertenece a los pensamientos nocturnos y las conversaciones profundas.", ja: "あなたの雰囲気は、深夜の思考や深い対話によく似合います。" },
        { en: "An old soul living in a modern world. What kind of art inspires you?", es: "Un alma vieja viviendo en un mundo moderno. ¿Qué tipo de arte te inspira?", ja: "現代社会に生きる古い魂のよう。どんなアートにインスピレーションを受けますか？" }
      ],
      "Kéo hội thoại sâu hơn": [
        { en: "That’s interesting… what made you start that habit?", es: "Eso es interesante... ¿qué te hizo empezar ese hábito?", ja: "興味深いですね…その習慣を始めたきっかけは何ですか？" },
        { en: "I like that… do you feel happier living this way?", es: "Me gusta eso... ¿te sientes más feliz viviendo de esta manera?", ja: "それいいですね…この方法で生きることで、より幸せを感じますか？" },
        { en: "Sounds peaceful… do you ever feel like changing it?", es: "Suena pacífico... ¿alguna vez tienes ganas de cambiarlo?", ja: "穏やかそうですね…変えてみたいと思うことはありますか？" },
        { en: "That suits you… what’s one thing you’d never change about your life?", es: "Eso te queda bien... ¿qué es lo único que nunca cambiarías de tu vida?", ja: "あなたにお似合いです…人生でこれだけは絶対に譲れない（変えない）ものは何ですか？" },
        { en: "I respect that… what’s your long-term goal with this lifestyle?", es: "Respeto eso... ¿cuál es tu objetivo a largo plazo con este estilo de vida?", ja: "尊敬します…このライフスタイルにおける長期的な目標は何ですか？" },
        { en: "Has this routine changed your perspective on success?", es: "¿Ha cambiado esta rutina tu perspectiva sobre el éxito?", ja: "このルーティンを始めてから、成功に対する考え方は変わりましたか？" },
        { en: "If you could add one more thing to your day, what would it be?", es: "Si pudieras agregar una cosa más a tu día, ¿qué sería?", ja: "もし一日にもう一つだけ何かを追加できるとしたら、何を選びますか？" },
        { en: "Who influenced you the most when you were creating this space?", es: "¿Quién te influyó más cuando estabas creando este espacio?", ja: "この空間を作るにあたって、一番影響を受けた人は誰ですか？" },
        { en: "Do you ever find it lonely to maintain this kind of lifestyle?", es: "¿Alguna vez te resulta solitario mantener este tipo de estilo de vida?", ja: "このようなライフスタイルを維持することに、孤独を感じることはありますか？" },
        { en: "What's the hardest part about sticking to this routine every day?", es: "¿Qué es lo más difícil de seguir esta rutina todos los días?", ja: "毎日このルーティンを続ける中で、一番大変な部分は何ですか？" }
      ]
    },
    "Xe hơi (Car)": {
      "Cool / natural": [
        { en: "That car looks clean… is it yours? You’ve got great taste.", es: "Ese coche se ve genial... ¿es tuyo? Tienes un gran gusto.", ja: "その車、めちゃくちゃ綺麗ですね…あなたのですか？センス最高です。" },
        { en: "Nice ride… what model is that? It suits you.", es: "Buen viaje... ¿qué modelo es ese? Te queda bien.", ja: "いい車ですね…何というモデルですか？あなたにぴったりです。" },
        { en: "The build is immaculate. Did you do any custom tuning?", es: "La construcción es inmaculada. ¿Le hiciste alguna afinación personalizada?", ja: "完璧な仕上がりですね。カスタムやチューニング là しているのですか？" },
        { en: "That paint job hits different under night lights. Beautiful machine.", es: "Ese trabajo de pintura se ve diferente bajo las luces nocturnas. Hermosa máquina.", ja: "夜の街灯に照らされた塗装が最高に映えますね。美しいマシンです。" },
        { en: "Great choice of wheels. It gives the car a perfect stance.", es: "Gran elección de ruedas. Le da al coche una postura perfecta.", ja: "ホイールのチョイスが最高。車のシルエットが完璧に引き締まっています。" },
        { en: "Aggressive front end, love the presence it has on the road.", es: "Parte delantera agresiva, me encanta la presencia que tiene en la carretera.", ja: "アグレッシブなフロントマスク、道路での存在感がたまりません。" },
        { en: "That exhaust note sounds deep and tuned. Absolute beast.", es: "Esa nota de escape suena profunda y afinada. Una bestia absoluta.", ja: "マフラーの音が深くて上質ですね。まさにモンスターマシンです。" },
        { en: "You don't see this configuration often. True enthusiast setup.", es: "No ves esta configuración a menudo. Configuración de un verdadero entusiasta.", ja: "この仕様は滅多に見かけないですね。本物のマニア向けのセットアップです。" },
        { en: "Looks like a proper driver's car. How's the steering response?", es: "Parece un coche de conductor adecuado. ¿Cómo es la respuesta de la dirección?", ja: "走るための車って感じがします。ステアリングのレスポンスはどうですか？" },
        { en: "Nothing beats a clean aesthetic like this. Pure class.", es: "Nada supera a una estética limpia como esta. Pura clase.", ja: "これほど洗練された美しさには敵いませんね。文句なしの気品です。" }
      ],
      "Warm / genuine": [
        { en: "I can see how much care you put into this car. It looks loved.", es: "Puedo ver cuánto cuidado pones en este coche. Se ve querido.", ja: "この車をどれだけ大切にしているか伝わります。愛着が溢れていますね。" },
        { en: "This car must have so many great memories attached to it.", es: "Este coche debe tener tantos grandes recuerdos asociados.", ja: "この車には、きっとたくさんの素敵な思い出が詰まっているんでしょうね。" },
        { en: "It looks extremely comfortable for long road trips. Safe driving!", es: "Se ve extremadamente cómodo para viajes largos. ¡Conducción segura!", ja: "長距離ドライブがとても快適そう。これからも安全運転で楽しんでください！" },
        { en: "A clean car reflects a peaceful mind. Beautifully maintained.", es: "Un coche limpio refleja una mente pacífica. Bellamente mantenido.", ja: "綺麗な車は整った心を映しますね。メンテナンスが行き届いていて素晴らしい。" },
        { en: "Love seeing someone appreciate their ride this much. Keep it up!", es: "Me encanta ver a alguien apreciar tanto su viaje. ¡Sigue así!", ja: "相棒をこれほど愛している姿を見るのが好きです。これからも大切にしてください！" },
        { en: "The interior looks spotless. You take amazing care of it.", es: "El interior se ve impecable. Lo cuidas increíblemente bien.", ja: "車内がチリ一つなくピカピカですね。お手入れが本当に上手です。" },
        { en: "This is a dream car for many, glad to see it in good hands.", es: "Este es el coche de ensueño para muchos, me alegra ver que está en buenas manos.", ja: "多くの人の憧れの車です。大切にしてくれるオーナーに出会えて車も幸せですね。" },
        { en: "There is nothing like a smooth evening cruise. Enjoy the journey!", es: "No hay nada como un viaje tranquilo por la noche. ¡Disfruta el viaje!", ja: "夜の心地よいクルージングに勝るものはありませんね。ドライブを楽しんで！" },
        { en: "The vintage feel inside is so nostalgic. Beautiful choice.", es: "El ambiente vintage en el interior es muy nostálgico. Hermosa elección.", ja: "内装のクラシックな雰囲気がとても懐かしいです。素敵なチョイスですね。" },
        { en: "It’s more than just a machine, it’s a lifestyle. Looks wonderful.", es: "Es más que una máquina, es un estilo de vida. Se ve maravilloso.", ja: "単なる機械ではなく、一つの生き方ですね。本当に素晴らしいです。" }
      ],
      "Light flirt (subtle)": [
        { en: "Nice car, but I bet the view from the passenger seat is even better.", es: "Buen coche, pero apuesto a que la vista desde el asiento del copiloto es aún mejor.", ja: "いい車ですね。でも、助手席からの景色はもっと最高なんだろうな。" },
        { en: "Do you ever need a co-pilot for your weekend night drives?", es: "¿Alguna vez necesitas un copiloto para tus viajes nocturnos de fin de semana?", ja: "週末の夜のドライブに、助手席のナビゲーターは必要ないですか？" },
        { en: "The car is stunning, but it definitely looks better with you in it.", es: "El coche es impresionante, pero definitivamente se ve mejor contigo en él.", ja: "車もカッコいいけれど、あなたが乗っているとさらに引き立ちますね。" },
        { en: "I suddenly feel like going on a long drive... Any open seats?", es: "De repente tengo ganas de ir a dar un largo paseo en coche... ¿Hay asientos libres?", ja: "急に遠くまでドライブに行きたくなっちゃった…助手席空いてますか？" },
        { en: "You have an amazing taste in cars. I wonder if your taste in music is just as good?", es: "Tienes un gusto increíble en coches. Me pregunto si tu gusto musical es igual de bueno.", ja: "車のセンスが抜群ですね。音楽 của センスも同じくらい素敵なのか気になります。" },
        { en: "Let’s get lost on the highway tonight. You drive, I’ll pick the playlist.", es: "Perdámonos en la autopista esta noche. Tú conduces, yo elijo la lista de reproducción.", ja: "今夜はハイウェイで迷子になりましょう。運転は任せるので、曲は私が選びます。" },
        { en: "That car looks like it belongs to someone dangerous. Are you?", es: "Ese coche parece pertenecer a alguien peligroso. ¿Lo eres?", ja: "危険な魅力を持つ人が乗っていそうな車。あなたもそうなの？" },
        { en: "I love the vibe of your dashboard lights. Looks like a perfect date spot.", es: "Me encanta la vibra de las luces de tu tablero. Parece el lugar perfecto para una cita.", ja: "インパネの照明の雰囲気が最高。完璧なデートスポットになりそう。" },
        { en: "You look like a professional racer. Do you drive this fast normally?", es: "Pareces un piloto profesional. ¿Conduces así de rápido normalmente?", ja: "プロのレーサーみたい。普段からそんなにスピードを出すんですか？" },
        { en: "A powerful car for a powerful personality. Highly attractive setup.", es: "Un coche potente para una personalidad potente. Configuración altamente atractiva.", ja: "パワフルな車にはパワフルな人が似合います。最高に魅力的です。" }
      ],
      "Playful": [
        { en: "Can I borrow it for a quick grocery run? I promise no speeding!", es: "¿Me lo prestas para ir rápido al supermercado? ¡Prometo no ir a exceso de velocidad!", ja: "ちょっとスーパーまで買い物に貸して！スピードは出さないって約束する！" },
        { en: "Does this beast accept premium snacks as fuel? Because I have plenty.", es: "¿Esta bestia acepta bocadillos premium como combustible? Porque tengo de sobra.", ja: "このモンスターマシンは、高級おやつを燃料として受け付けますか？（笑）" },
        { en: "If I race you in my bicycle, do I get a head start of 5 miles?", es: "Si corro contra ti en mi bicicleta, ¿tengo una ventaja inicial de 5 millas?", ja: "私の自転車と勝負する？5キロくらい先からスタートさせてくれるならいいよ！" },
        { en: "Your car looks cleaner than my future right now. What's the secret?", es: "Tu coche se ve más limpio que mi futuro ahora mismo. ¿Cuál es el secreto?", ja: "私の未来よりもピカピカに輝く車ですね。秘訣は何ですか？" },
        { en: "Wait, does it transform into a robot at midnight or are you just a normal hero?", es: "Espera, ¿se transforma en un robot a medianoche o eres solo un héroe normal?", ja: "夜中になるとトランスフォームしてロボットになったりする？それとも普通のヒーロー？" },
        { en: "Nice car, but does it have a built-in coffee maker for lazy mornings?", es: "Buen coche, pero ¿tiene una cafetera cafetera integrada para las mañanas perezosas?", ja: "いい車だけど, 朝寝坊したとき用のコーヒーメーカーは内蔵されてる？" },
        { en: "I bet you spent 5 hours just positioning the camera for this shot. Respect!", es: "Apuesto a que pasaste 5 horas solo posicionando la cámara para esta toma. ¡Respeto!", ja: "このアングルを撮るためだけに5時間くらいカメラ調整したでしょ？（笑）" },
        { en: "My current car makes a weird duck noise when I break. Let's swap?", es: "Mi coche actual hace un ruido extraño de pato cuando freno. ¿Intercambiamos?", ja: "私の車, ブレーキを踏むとアヒルの声がするんだよね。交換しない？" },
        { en: "This video makes me want to buy a sports car, then I remembered my bank account.", es: "Este video me da ganas de comprar un coche deportivo, luego recordé mi cuenta bancaria.", ja: "スポーツカーが欲しくなる動画。あ、残高確認して現実に戻りました。" },
        { en: "Is the steering wheel on the correct side or the fun side?", es: "¿El volante está del lado correcto o del lado divertido?", ja: "ハンドルは正しい側にあるの？それとも面白い側（右/左）にあるの？" }
      ],
      "Deep / mysterious (idol vibe)": [
        { en: "A solitary drive at midnight solves questions that daylight cannot answer.", es: "Un viaje solitario a medianoche resuelve preguntas que la luz del día no puede responder.", ja: "真夜中の孤独なドライブは、昼間には見つからない答えを教えてくれる。" },
        { en: "The machine is an extension of the soul. Shadows and metal moving together.", es: "La máquina es una extensión del alma. Sombras y metal moviéndose juntos.", ja: "マシンは魂の拡張。影と金属が一つになって夜を駆け抜ける。" },
        { en: "You seem to run away from something every time you start that engine.", es: "Pareces huir de algo cada vez que enciendes ese motor.", ja: "エンジンをかけるたび、あなたは何かから逃避しているように見える。" },
        { en: "There is a beautiful melancholy in a highway with no destination.", es: "Hay una hermosa melancolía en una autopista sin destino.", ja: "目的のないハイウェイには、美しい哀愁が漂っています。" },
        { en: "The night belongs to those who move in silence. Captivating machine.", es: "La noche pertenece a quienes se mueven en silencio. Máquina cautivadora.", ja: "夜は静寂の中を動く者のもの。引き込まれるようなマシンです。" },
        { en: "You don't seek attention, yet the road entirely bows down to your pace.", es: "No buscas atención, pero el camino se inclina por completo ante tu ritmo.", ja: "視線を集めようとしないのに、すべての道があなたのペースにひれ伏す。" },
        { en: "Some people drive to arrive, others drive to disappear. Which one are you?", es: "Algunos conducen para llegar, otros conducen para desaparecer. ¿Cuál eres tú?", ja: "目的地のために走る人と、消え去るために走る人。あなたはどっち？" },
        { en: "The dark aesthetic hides the power underneath. Very enigmatic personality.", es: "La estética oscura oculta el poder debajo. Personalidad muy enigmática.", ja: "漆黒のデザインが秘められたパワーを隠している。謎めいた存在感です。" },
        { en: "The engine purrs like a secret only a few are allowed to hear.", es: "El motor ronronea como un secreto que solo a unos pocos se les permite escuchar.", ja: "選ばれた者だけに聴くことが許された、秘密のようなエンジン音。" },
        { en: "Chasing the horizon in absolute silence. A true modern nomad.", es: "Chasqueando el horizonte en absoluto silencio. Un verdadero nómada moderno.", ja: "完全な静寂の中で地平線を追いかける。まさに現代の放浪者ですね。" }
      ],
      "Kéo hội thoại sâu hơn": [
        { en: "What made you choose this specific model over other options?", es: "¿Qué te hizo elegir este modelo específico sobre otras opciones?", ja: "他の選択肢もある中で、なぜこのモデルを選んだのですか？" },
        { en: "Did you build this car for speed or for the long night journeys?", es: "¿Construiste este coche para la velocidad o para los largos viajes nocturnos?", ja: "この車はスピードを追求するため？それとも長い夜の旅のためですか？" },
        { en: "What’s the longest road trip you’ve ever taken with this ride?", es: "¿Cuál es el viaje por carretera más largo que has hecho con este vehículo?", ja: "この相棒と一緒に走った、一番長いロードトリップの思い出は？" },
        { en: "Does the sound of the engine help you clear your thoughts after a rough day?", es: "¿El sonido del motor te ayuda a despejar tus pensamientos después de un día duro?", ja: "疲れた一日の後、エンジンの音は思考をクリアにしてくれますか？" },
        { en: "If you could drive this car anywhere in the world right now, where to?", es: "Si pudieras conducir este coche a cualquier parte del mundo ahora mismo, ¿a dónde sería?", ja: "もし今すぐ世界中どこへでもこの車で行けるとしたら、どこを走りたい？" },
        { en: "How much of the customization did you design yourself?", es: "¿Cuánto de la personalización diseñaste tú mismo?", ja: "カスタムパーツの中で、自分でデザインした部分はどれくらいありますか？" },
        { en: "Do you prefer driving alone with your thoughts or with someone next to you?", es: "¿Prefieres conducir solo con tus pensamientos o con alguien a tu lado?", ja: "自分の世界に浸る一人ドライブと、誰かを隣に乗せるドライブ、どっちが好き？" },
        { en: "What was the very first modification you made to this machine?", es: "¿Cuál fue la primera modificación que le hiciste a esta máquina?", ja: "このマシンを手に入れて、一番最初にカスタムした場所はどこですか？" },
        { en: "Does this car represent a milestone achievement in your life?", es: "¿Representa este coche un hito importante en tu vida?", ja: "この車は、あなたの人生における大きな目標の達成を意味していますか？" },
        { en: "What’s one track that always plays when you hit the highway?", es: "¿Cuál es la canción que siempre suena khi bạn chạy vào cao tốc?", ja: "高速道路に乗ったとき、必ずかける定番の一曲は何ですか？" }
      ]
    },
    "Xe motor (Bike)": {
      "Cool / natural": [
        { en: "That bike looks badass… is it yours? You ride it often?", es: "Esa moto se ve brutal... ¿es tuya? ¿La montas a menudo?", ja: "そのバイク、めちゃくちゃいかつくてカッコいいですね…あなたのですか？よく乗りますか？" },
        { en: "Clean bike… what model is that? It fits you.", es: "Moto limpia... ¿qué modelo es ese? Te queda bien.", ja: "綺麗なバイク…何というモデルですか？あなたにお似合いです。" },
        { en: "The torque on this machine must be insane. Great project bike.", es: "El par motor en esta máquina debe ser una locura. Gran moto de proyecto.", ja: "このマシンのトルクは凄そうですね。素晴らしいプロジェクトバイクです。" },
        { en: "That exhaust rumble is therapy. What system are you running?", es: "Ese rugido del escape es terapia. ¿Qué sistema estás usando?", ja: "このマフラーの重低音は癒やしですね。どこのシステムを組んでいるのですか？" },
        { en: "Love the custom clip-ons and seat setup. Looks aggressive.", es: "Me encantan los semimanillares personalizados y la configuración del asiento. Se ve agresiva.", ja: "カスタムのセパハンとシートのバランスが最高。アグレッシブでいいですね。" },
        { en: "Perfect canyon carver. How does it hold the line in corners?", es: "Perfecta para tallar cañones. ¿Cómo mantiene la línea en las curvas?", ja: "峠を攻めるのに最高の一台。コーナリングでのラインの維持はどうですか？" },
        { en: "Blacked out look suits this frame perfectly. Pure attitude.", es: "El aspecto totalmente negro le queda perfecto a este cuadro. Pura actitud.", ja: "マットブラックのルックスがこのフレームに完璧にマッチしています。渋すぎます。" },
        { en: "That headlight design gives it a futuristic cyber vibe.", es: "Ese diseño de faro le da una vibra ciber futurista.", ja: "このヘッドライトのデザイン、未来的なサイバー感があって最高です。" },
        { en: "Built for speed and style. Did you replace the suspension?", es: "Construida para la velocidad y el estilo. ¿Reemplazaste la suspensión?", ja: "速さとスタイルを両立していますね。サスペンションは交換しましたか？" },
        { en: "That's a classic with a modern twist. Excellent garage companion.", es: "Ese es un clásico con un toque moderno. Excelente compañero de garaje.", ja: "モダンなアレンジを加えた名車ですね。ガレージに置くだけで絵になります。" }
      ],
      "Warm / genuine": [
        { en: "Riding open air is a beautiful feeling. Stay safe on the roads!", es: "Viajar al aire libre es una sensación hermosa. ¡Mantente seguro en las carreteras!", ja: "風を感じて走るって最高に気持ちいいですよね。安全運転で楽しんで！" },
        { en: "Your gear looks top-notch. Safety first, love the setup.", es: "Tu equipo se ve de primera línea. La seguridad es lo primero, me encanta.", ja: "ウェアやヘルメットもしっかりしていて素敵。安全第一のスタイル、尊敬します。" },
        { en: "Nothing compares to the brotherhood of riders. Enjoy the journey.", es: "Nada se compara con la hermandad de los motociclistas. Disfruta el viaje.", ja: "ライダー同士の絆って特別ですよね。素晴らしい旅のルートになりますように。" },
        { en: "The dedication to keeping this chain and body clean is amazing.", es: "La dedicación para mantener esta cadena y carrocería limpias es increíble.", ja: "チェーンもカウルもピカピカ。日頃の愛のこもった手入れが伝わります。" },
        { en: "A two-wheeled therapy session. Hope your ride clears your mind completely.", es: "Una sesión de terapia de dos ruedas. Espero que aclare tu mente.", ja: "二輪車は最高の心の癒やしですね。嫌なことも全部風に吹き飛ばせますように。" },
        { en: "That classic tank shape is pure art. Beautifully preserved.", es: "Esa forma clásica del tanque es puro arte. Bellamente preservada.", ja: "このタンクのクラシカルな曲線、芸術的です。綺麗に維持されていますね。" },
        { en: "The sound of a well-tuned engine is music to the soul. Safe travels!", es: "El sonido de un motor bien afinado es música para el alma. ¡Buen viaje!", ja: "調律されたエンジン音は魂に響く音楽ですね。良い旅を！" },
        { en: "Riding into the sunset must have been magical. Thanks for sharing.", es: "Viajar hacia el atardecer debe haber sido mágico. Gracias por compartir.", ja: "夕日に向かって走る姿、絵画のように美しかったです。共有ありがとう！" },
        { en: "Perfect day for a cruise. The wind and the road belong to you today.", es: "Día perfecto para un crucero. El viento y la carretera te pertenecen hoy.", ja: "最高のツーリング日和。今日の風と道はすべてあなたのものですね。" },
        { en: "Every mile is a story. Can't wait to see where this machine takes you next.", es: "Cada milla es una historia. No puedo esperar a ver a dónde te lleva.", ja: "走った分だけ物語が生まれますね。次はどこへ行くのか楽しみにしています。" }
      ],
      "Light flirt (subtle)": [
        { en: "That backseat looks a bit lonely. Do you take passengers?", es: "Ese asiento trasero se ve un poco solitario. ¿Llevas pasajeros?", ja: "タンデムシートが少し寂しそう。後ろに誰かを乗せる予定はありますか？" },
        { en: "Hold on tight, right? I wouldn’t mind having an excuse for that.", es: "Agárrate fuerte, ¿verdad? No me importaría tener una excusa para eso.", ja: "「しっかり掴まってて」って言われる口実、私なら大歓迎ですよ？" },
        { en: "You look dangerously attractive in that leather jacket and helmet.", es: "Te ves peligrosamente atractivo con esa chaqueta de cuero y casco.", ja: "レザージャケットにヘルメット姿、危険なくらいカッコいいです。" },
        { en: "Suddenly I want to experience the speed of a superbike... Got a spare helmet?", es: "De repente quiero experimentar la velocidad... ¿Tienes un casco de repuesto?", ja: "急にバイクの加速感を体験してみたくなっちゃった…予備のヘルメットある？" },
        { en: "The way you lean into corners is mesmerizing. Very confident rider.", es: "La forma en que te inclinas en las curvas es mesmerizante. Muy seguro.", ja: "ハングオンする姿が美しすぎて見惚れちゃう。ライディングがスマートです。" },
        { en: "Let’s ride into the night breeze. I promise I won't shake the bike.", es: "Viajemos en la brisa de la noche. Prometo no mover la moto.", ja: "夜の風を切りに行きましょう。後ろで暴れたりしないって約束するから。" },
        { en: "There's something raw and magnetic about a person who commands a machine like this.", es: "Hay algo magnético en alguien que domina una máquina como esta.", ja: "これほどのモンスターマシンを乗りこなす人には、野生的な魅力を感じます。" },
        { en: "If you speed up, I’ll just have to hold onto you tighter. Deal?", es: "Si aceleras, tendré que abrazarte más fuerte. ¿Trato?", ja: "スピード出すなら、その分ぎゅって捕まるからね。それでいい？" },
        { en: "Your bike setup matches your sharp energy perfectly. Incredibly sleek.", es: "La configuración de tu moto coincide perfectamente con tu energía. Muy elegante.", ja: "マシンのカスタムとあなたの雰囲気が完璧にシンクロしてて、エロカッコいい。" },
        { en: "A fast machine needs a fearless rider. You look the part completely.", es: "Una máquina rápida necesita un piloto audaz. Pareces el indicado.", ja: "最速のマシンには恐れを知らないライダーが似合う。まさにあなたですね。" }
      ],
      "Playful": [
        { en: "If I drop my ice cream on your clean tank, will you forgive me?", es: "Si se me cae mi helado en tu tanque limpio, ¿me perdonarías?", ja: "せっかくピカピカのタンクにアイス落としたら怒る？（笑）" },
        { en: "Can this bike do wheelies or are you a law-abiding citizen today?", es: "¿Puede esta moto hacer caballitos o eres un ciudadano respetuoso hoy?", ja: "ウィリーとかできるの？それとも今日は模範的な優良ドライバー？" },
        { en: "My scooter could totally take you in a race... downhill, with high wind.", es: "Mi scooter podría ganarte en una carrera... cuesta abajo, con viento fuerte.", ja: "私の原付なら勝てるよ！…下り坂で、ものすごい追い風が吹いてればね！" },
        { en: "The exhaust noise probably wakes up the entire neighborhood. Love it!", es: "El ruido del escape probablemente despierta a todo el vecindario. ¡Me encanta!", ja: "このマフラー音、ご近所さん全員起きちゃうレベル（笑）最高！" },
        { en: "Are you a Power Ranger or why is your suit so matching?", es: "¿Eres un Power Ranger o por qué tu traje combina tanto?", ja: "もしかして戦隊ヒーローのレッド？ってくらい全身の色が揃ってるね！" },
        { en: "Nice bike, does it come with training wheels for beginners like me?", es: "Buena moto, ¿viene con ruedas de entrenamiento para principiantes como yo?", ja: "いいバイク！私みたいな初心者用に、補助輪は付けられる仕様？" },
        { en: "I bet you spent half the day just cleaning the bugs off your visor.", es: "Apuesto a que pasaste medio día solo limpiando los insectos de tu visor.", ja: "シールドについた虫の死骸を掃除するだけで半日終わってそう（笑）" },
        { en: "Let’s swap vehicles. You take my skateboard, I take the superbike.", es: "Intercambiemos vehículos. Tú tomas mi monopatín, yo tomo la supermoto.", ja: "乗り物交換しよう。あなたは私のスケボー、私はその大型バイクね！" },
        { en: "This machine looks like it eats asphalt for breakfast. Angry beast!", es: "Esta máquina parece comer asfalto en el desayuno. ¡Bestia enojada!", ja: "アスファルトを噛みちぎって走りそうな見た目。怒れる猛獣だね。" },
        { en: "Did you buy the bike to match your outfit, or the outfit to match the bike?", es: "Is it the bike matching the outfit, or vice versa?", ja: "バイクに合わせて服を買ったの？それとも服に合わせてバイクを塗ったの？" }
      ],
      "Deep / mysterious (idol vibe)": [
        { en: "Two wheels, one engine, and an endless road to lose your identity.", es: "Dos ruedas, un motor y un camino sin fin para perder tu identidad.", ja: "二つの車輪と一つのエンジン、アイデンティティを消し去るための果てしない道。" },
        { en: "The helmet hides the face, but the style reveals everything about the spirit.", es: "El casco oculta el rostro, pero el estilo revela todo sobre el espíritu.", ja: "ヘルメットは表情を隠すが、走りのスタイルがその魂のすべてを物語る。" },
        { en: "Chasing shadows under the moonlight. The asphalt knows your secrets.", es: "Persiguiendo sombras bajo la luz de la luna. El asfalto conoce tus secretos.", ja: "月明かりの下で影を追いかける。アスファルトだけがあなたの秘密を知っている。" },
        { en: "There is freedom in being exposed to the elements. Unforgiving and pure.", es: "Hay libertad en estar expuesto a los elementos. Implacable y puro.", ja: "むき出しの自然に身をさらす自由。そこには嘘偽りのない純粋さがある。" },
        { en: "You don't ride to be seen. You ride to become invisible to the world.", es: "No montas para ser visto. Montas para volverte invisible para el mundo.", ja: "見せつけるために走るのではない。世界から姿を消すために走るのだ。" },
        { en: "The roar of the engine silences the chaos in the mind. True inner peace.", es: "El rugido del motor silencia el caos en la mente. Verdadera paz interior.", ja: "エンジンの咆哮が頭の中の雑音をかき消す。それこそが本当の静寂。" },
        { en: "A dark rider in a neon city. Your silhouette tells a lonely story.", es: "Un jinete oscuro en una ciudad de neón. Tu silueta cuenta una historia solitaria.", ja: "ネオン街に現れた漆黒のライダー。そのシルエットは孤独の美学を語る。" },
        { en: "Speed is the only currency that buys absolute freedom from time.", es: "La velocidad es la única moneda que compra la libertad absoluta del tiempo.", ja: "速度だけが、時間という概念から絶対的な自由を買い戻せる通貨だ。" },
        { en: "The cold night wind cannot penetrate a burning resolve. Sleek presence.", es: "El frío viento nocturno no puede penetrar una resolución ardiente.", ja: "冷たい夜風も、燃え盛る意志を貫くことはできない。圧倒的な佇まい。" },
        { en: "Boundaries disappear when the throttle opens wide. A solitary rebel.", es: "Las fronteras desaparecen cuando el acelerador se abre de par en par.", ja: "スロットルを全開にした瞬間、あらゆる境界線が消滅する。孤高の反逆者。" }
      ],
      "Kéo hội thoại sâu hơn": [
        { en: "What made you choose a bike over a car for your late night escapes?", es: "¿Qué te hizo elegir una moto sobre un coche para tus escapadas nocturnas?", ja: "夜の逃避行に、車ではなくあえてバイクを選んだ理由は何ですか？" },
        { en: "How long did it take you to master handling this much horsepower?", es: "¿Cuánto tiempo te tomó dominar el manejo de tantos caballos de fuerza?", ja: "これほどのハイパワーマシンの挙動をマスターするのにどれくらいかかりましたか？" },
        { en: "Have you ever taken this machine on an overnight cross-country tour?", es: "¿Alguna vez has llevado esta máquina en un recorrido por el país durante la noche?", ja: "この相棒と一晩中走って、県境を越えるようなロングツーリングをしたことは？" },
        { en: "What's the absolute best cornering road you've found in your area?", es: "¿Cuál es la mejor carretera de curvas que has encontrado en tu zona?", ja: "あなたの地元で、一番攻めがいのある最高のワインディングロードはどこ？" },
        { en: "Do you find that riding helps you process difficult decisions better?", es: "¿Sientes que andar en moto te ayuda a procesar mejor las decisiones difíciles?", ja: "バイクに乗っているときの方が、難しい決断や考え事がまとまりやすいですか？" },
        { en: "Did you assemble or customize the bodywork yourself?", es: "¿Armaste o personalizaste la carrocería tú mismo?", ja: "カウルなどの外装カスタムは、すべて自分の手で組み上げたのですか？" },
        { en: "What's the scariest situation you've had to navigate while on two wheels?", es: "¿Cuál es la situación más aterradora que has tenido que navegar en dos ruedas?", ja: "二輪の運転中に、今までで一番ヒヤッとした瞬間はどんな状況でしたか？" },
        { en: "Does the helmet style reflect a specific concept or anime inspiration?", es: "¿El estilo del casco refleja un concepto específico o inspiración de anime?", ja: "ヘルメットのデザインには、何か特定のコンセプトやアニメの元ネタがあるの？" },
        { en: "What is your dream destination that you haven't ridden to yet?", es: "¿Cuál es tu destino de ensueño al que aún no has viajado en moto?", ja: "バイク乗りとして、まだ走ったことがない「いつか行きたい聖地」はどこ？" },
        { en: "If you could upgrade to any superbike tomorrow, what would be the choice?", es: "Si pudieras actualizar a cualquier supermoto mañana, ¿cuál sería la elección?", ja: "もし明日、何でも好きな最高峰のバイクに乗り換えられるなら何を選ぶ？" }
      ]
    },
    "TikTok Live PK": {
      "Cool / tự nhiên": [
        { en: "That PK battle was impressive… your gifts looked amazing. Do you do this often?", es: "Esa batalla PK fue impresionante... tus regalos se veían increíbles. ¿Haces esto a menudo?", ja: "あのPKバトルは凄かった…ギフト も 素晴らしかったです。よくやられているのですか？" },
        { en: "Clutch win at the last second! The team strategy was flawless.", es: "¡Victoria decisiva en el último segundo! La estrategia del equipo fue impecable.", ja: "ラスト1秒での大逆転勝利！チームの戦略が完璧でしたね。" },
        { en: "The speed challenge was intense. Your chat really backed you up.", es: "El desafío de velocidad fue intenso. Tu chat realmente te respaldó.", ja: "スピードチャレンジ、大熱戦でしたね。リスナーの団結力が凄かったです。" },
        { en: "That MVP user came out of nowhere. Amazing coordination.", es: "Ese usuario MVP salió de la nada. Increíble coordinación.", ja: "あのMVPのリスナーさん、最高のタイミングで現れましたね。素晴らしい連携です。" },
        { en: "You stayed so calm under pressure. Great content overall.", es: "Te mantuviste tan tranquilo bajo presión. Gran contenido en general.", ja: "プレッシャーの中でもずっと冷静でしたね。配信として最高に面白かったです。" },
        { en: "Massive score difference but you flipped it. Iconic match.", es: "Gran diferencia de puntuación pero le diste la vuelta. Partido icónico.", ja: "大差をひっくり返しましたね。歴史に残る名勝負でした。" },
        { en: "The banters between rounds were hilarious. Perfect live entertainment.", es: "Las bromas entre rondas fueron hilarantes. Entretenimiento en vivo perfecto.", ja: "ラウンド間のトークの掛け合いが爆笑でした。最高のエンターテインメントです。" },
        { en: "Your gifters really understand the game timing. Respect to the sub team.", es: "Tus donadores realmente entienden el tiempo del juego. Respeto al equipo.", ja: "ギフターさんたちの投げるタイミングがプロ級。チームの皆さんにリスペクトです。" },
        { en: "Crazy energy in the room. This has to be one of your best PKs.", es: "Energía loca en la sala. Este tiene que ser uno de tus mejores PK.", ja: "枠の熱量がとんでもなかったです。過去最高のPKの一つですね。" },
        { en: "Fair play and big scores. Both sides put up a massive fight.", es: "Juego limpio y grandes puntuaciones. Ambos lados dieron una gran pelea.", ja: "フェアプレで高得点の叩き合い。両者一歩も引かない大接戦でした。" }
      ],
      "Warm / genuine": [
        { en: "Your grateful attitude toward the chat is so heartwarming to watch.", es: "Tu actitud agradecida hacia el chat es muy reconfortante de ver.", ja: "リスナーの皆さんに何度も感謝を伝える姿、本当に心が温まります。" },
        { en: "Win or lose, your live streams always bring a smile to my face.", es: "Ganes o pierdas, tus transmisiones en vivo siempre me sacan una sonrisa.", ja: "勝ち負けに関わらず、あなたの配信はいつもみんなを笑顔にしてくれますね。" },
        { en: "The community you built is so supportive. Lovely energy in the room today.", es: "La comunidad que construiste es muy solidaria. Hermosa energía hoy.", ja: "本当に温かいリスナーが集まっていますね。今日の枠の雰囲気も最高でした。" },
        { en: "Thank you for the fun stream. Your hard work really shines through.", es: "Gracias por la divertida transmisión. Tu arduo trabajo realmente brilla.", ja: "楽しい配信をありがとう！リスナーを楽しませようとする努力が伝わります。" },
        { en: "Seeing everyone work together for the double multiplier was beautiful.", es: "Ver a todos trabajar juntos por el doble multiplicador fue hermoso.", ja: "みんなで一丸となって倍率タイム（W効果）を狙いに行く一体感、感動しました。" },
        { en: "You always treat your opponent with so much respect. True class act.", es: "Siempre tratas a tu oponente con mucho respeto. Un verdadero acto de clase.", ja: "対戦相手のライバーさんへのリスペクトを忘れない姿勢、本当に素敵です。" },
        { en: "The chat was filled with positive vibes. Proud to be a small part of it.", es: "El chat estuvo lleno de vibras positivas. Orgulloso de ser parte.", ja: "コメント欄がポジティブな言葉で溢れていました。応援できて誇らしいです。" },
        { en: "Your reactions to the universe gifts are the best. So wholesome!", es: "Tus reacciones a los regalos del universo son las mejores. ¡Muy tierno!", ja: "大きなギフト（ユニバースなど）が飛んだ時のリアクション、最高に可愛かったです！" },
        { en: "Great match! Your smile at the end proved that the connection matters most.", es: "¡Gran partido! Tu sonrisa al final demostró lo que más importa.", ja: "ナイスバトル！最後の笑顔を見て、結果より絆が大事なんだなと感じました。" },
        { en: "Sending love to the entire family group. You guys did amazing.", es: "Enviando amor a todo el grupo familiar. Ustedes lo hicieron increíble.", ja: "ファミリーの皆さん、お疲れ様でした！最高のチームワークでしたね。" }
      ],
      "Light flirt (subtle)": [
        { en: "I was focusing on the score, but your facial expressions completely distracted me.", es: "Me concentraba en el puntaje, pero tus expresiones me distrajeron por completo.", ja: "ポイントの攻防を見てたはずなのに、あなたの表情が可愛すぎて集中できなかった。" },
        { en: "If you lose the next PK, can the punishment be a date with me?", es: "Si pierdes el próximo PK, ¿el castigo puede ser una cita conmigo?", ja: "もし次のバトルで負けちゃったら、罰ゲームは私とデートすることにしない？" },
        { en: "You look so cute when you're desperate for the win. Highly charming.", es: "Te ves tan lindo cuando estás desesperado por la victoria. Muy encantador.", ja: "真剣に勝ちを狙いに行っている時の顔、ちょっときゅんとしちゃいました。" },
        { en: "I threw some roses, but honestly, you deserve a whole garden.", es: "Lancé algunas rosas, pero honestamente, mereces un jardín entero.", ja: "バラのギフトを投げたけど、本当はあなたに本物の花束をあげたいくらい。" },
        { en: "Your opponent never stood a chance against your charms. Flawless view.", es: "Tu oponente nunca tuvo oportunidad contra tus encantos. Vista impecable.", ja: "対戦相手も、あなたのそのビジュアルの魅力には敵わなかったみたいね。" },
        { en: "The screen layout was split, but my eyes were 100% on your side.", es: "El diseño de la pantalla estaba dividido, pero mis ojos estaban de tu lado.", ja: "画面は二分割されてるけど、私の目は100%あなたの側しか見てないよ。" },
        { en: "Are you trying to win the PK match or just trying to win my heart tonight?", es: "¿Estás intentando ganar el PK o solo intentando ganar mi corazón?", ja: "バトルの勝利を狙ってるの？それとも今夜、私のハートを奪いに来てるの？" },
        { en: "Seeing you celebrate a victory is the most attractive thing on TikTok Live.", es: "Verte celebrar una victoria es lo más atractivo en TikTok Live.", ja: "勝利して喜んでいる姿、TikTok Liveの中で一番輝いてて素敵。" },
        { en: "I’ll be your secret shield in the last 10 seconds anytime you need.", es: "Seré tu escudo secreto en los últimos 10 segundos cuando lo necesites.", ja: "ラスト10秒の守り、いつでもあなたの専属の盾になってあげる。" },
        { en: "You have a dangerous smile when the multiplier starts. Very captivating.", es: "Tienes una sonrisa peligrosa cuando empieza el multiplicador.", ja: "倍率タイムが始まった瞬間の不敵な笑顔、すごくゾクゾクして魅力的。" }
      ],
      "Playful": [
        { en: "The opponent's face when the lions dropped was priceless! Hilarious!", es: "¡La cara del oponente cuando cayeron los leones no tuvo precio! ¡Hilarante!", ja: "ライオン（高額ギフト）が降ってきた時の相手の顔、最高に面白かった！（笑）" },
        { en: "Your celebration dance belongs to a comedy movie. 10/10 performance.", es: "Tu baile de celebración pertenece a una película de comedia. 10/10.", ja: "勝ったときの喜びのダンス、お笑い芸人枠かと思った（笑）満点！" },
        { en: "Wait, was that a strategic plan or did we just random button mash to victory?", es: "Espera, ¿fue un plan estratégico o solo ganamos al azar?", ja: "今のって作戦通り？それともリスナーがパニックになって連打しただけ？（笑）" },
        { en: "The punishment game for the loser is brutal. Glad we survived!", es: "El juego de castigo para el perdedor es brutal. ¡Me alegra que sobrevivimos!", ja: "負けた方の罰ゲーム、過酷すぎて草。生き残れて本当に良かったー！" },
        { en: "I tapped the screen so hard my phone screen almost cracked. Send help!", es: "Toqué la pantalla tan fuerte que casi se rompe. ¡Envía ayuda!", ja: "いいね連打しすぎて指が限界、画面にヒビが入るかと思ったわ！（笑）" },
        { en: "You won the match, but your hair completely lost the battle. Fix it!", es: "Ganaste el partido, pero tu cabello perdió la batalla por completo. ¡Arréglalo!", ja: "バトルには勝ったけど、興奮しすぎて髪型が完全に崩壊してるよ！（笑）" },
        { en: "Is it legal to win by this much? The lag on the points was crazy.", es: "¿Es legal ganar por tanto? El retraso en los puntos fue una locura.", ja: "こんなに大差つけて勝っちゃって大丈夫？ポイントのメーターバグってた。" },
        { en: "We are officially the loudest chat room on the planet right now.", es: "Somos oficialmente la sala de chat más ruidosa del planeta ahora mismo.", ja: "間違いなく、今この瞬間で地球上一番うるさい配信枠はここだね（笑）" },
        { en: "The multiplier timer ran out right as I sent the gift. Classic me.", es: "El temporizador se acabó justo cuando envié el regalo. Clásico de mí.", ja: "倍率タイマーが終わった瞬間にギフト届いたわ。相変わらずタイミング悪い私。" },
        { en: "You look like a gaming general commanding an army of emoji tappers.", es: "Pareces un general de juegos al mando de un ejército de tappers.", ja: "エモジやいいねを連打する軍勢を率いる、戦国武将みたいだったよ。" }
      ],
      "Deep / mysterious (idol vibe)": [
        { en: "Numbers on a screen cannot quantify the real influence you hold.", es: "Los números en una pantalla no pueden cuantificar la influencia real que tienes.", ja: "画面上の数字など、あなたが持つ本物の影響力を測る基準にはならない。" },
        { en: "In the digital arena, you remain an enigma that crowds gather to watch.", es: "En la arena digital, sigues siendo un enigma que las multitudes ven.", ja: "デジタルという戦場の中で、あなたは人々を惹きつけてやまない神秘であり続ける。" },
        { en: "Victory is fleeting, but the loyalty of the shadow team is permanent.", es: "La victoria es fugaz, pero la lealtad del equipo sombra es permanente.", ja: "勝利は一瞬にすぎないが、影から支えるチームの忠誠は永遠だ。" },
        { en: "You control the rhythm of the chat without uttering a desperate word.", es: "Controlas el ritmo del chat sin pronunciar una palabra desesperada.", ja: "必死な言葉を一切口にせず、コメント欄の熱量を完全に支配している。" },
        { en: "A silent strategist disguised as a live streamer. Fascinating match.", es: "Un estratega silencioso disfrazado de streamer. Partido fascinante.", ja: "配信者の皮をかぶった、冷徹な戦略家。じつに興味深い一戦だった。" },
        { en: "The screen splits people apart, but your presence bridges the distance.", es: "La pantalla divide a la gente, pero tu presencia acorta la distancia.", ja: "画面は二人を分かつが、あなたの存在感がその距離を無効化する。" },
        { en: "The lights fade when the PK ends, but your aura lingers in the dark.", es: "Las luces se apagan cuando termina el PK, pero tu aura permanece.", ja: "バトルが終わり配信の光が消えても、あなたの余韻は暗闇に残る。" },
        { en: "True power doesn't make noise. It reveals itself in the final second.", es: "El verdadero poder no hace ruido. Se revela en el último segundo.", ja: "本当の力は騒ぎ立てない。残り「1秒」の静寂の中で証明される。" },
        { en: "An intense battle, yet your eyes remained fixed on a deeper horizon.", es: "Una batalla intensa, pero tus ojos permanecieron fijos más allá.", ja: "激しい乱打戦の中でも、あなたの瞳はさらに深い先を見据えていた。" },
        { en: "You play the game, but you don't let the game play you. Iconic attitude.", es: "Juegas el juego, pero no dejas que el juego juegue contigo. Actitud icónica.", ja: "ゲームを支配しているが、ゲームに呑まれることはない。完璧なスタンス。" }
      ],
      "Kéo hội thoại sâu hơn": [
        { en: "What's the most memorable setup an opponent has ever used against you?", es: "¿Cuál es la configuración más memorable que un oponente ha usado contra ti?", ja: "今まで対戦したライバーの中で、一番印象に残っている強敵や作戦は？" },
        { en: "Do you prefer the fast-paced speed challenges or the long tactical matches?", es: "¿Prefieres los desafíos de velocidad rápida o los partidos tácticos largos?", ja: "瞬発力が必要なスピード勝負と、長期戦の頭脳バトル、どっちが好みですか？" },
        { en: "How do you maintain your mental focus when the scores are heavily against you?", es: "¿Cómo mantienes tu enfoque mental cuando los puntajes están muy en contra?", ja: "圧倒的な大差をつけられている時、どうやってメンタルを維持しているの？" },
        { en: "Does the pressure of the final 10 seconds give you an adrenaline rush?", es: "¿La presión de los últimos 10 segundos te da un subidón de adrenalina?", ja: "ラスト10秒のあの極限状態のプレッシャーは、アドレナリンが出ますか？" },
        { en: "How do you decide which creators to invite for a PK matchup?", es: "¿Cómo decides a qué creadores invitar para un enfrentamiento PK?", ja: "コラボやPK対戦をする相手のライバーは、普段どういう基準で選んでいるの?" },
        { en: "What's the funniest punishment game you've ever had to execute?", es: "¿Cuál es el juego de castigo más divertido que has tenido que ejecutar?", ja: "これまでにやった罰ゲームの中で、一番恥ずかしかった、または爆笑したものは？" },
        { en: "Do you think team coordination in the chat matters more than individual big gifts?", es: "¿Crees que la coordinación del chat importa más que los grandes regalos?", ja: "大物ギフターのワンパンと、枠全体のチームワーク連打、どちらが勝敗を分けると思う？" },
        { en: "How do you celebrate with your core core group after a massive global win?", es: "¿Cómo celebras con tu grupo principal después de una gran victoria?", ja: "大きな大会や対戦で勝った後、ファミリーのコアメンバーとはどうお祝いするの？" },
        { en: "Does running these intense matches change your standard stream plan for the week?", es: "¿Cambia el ritmo de tus transmisiones estándar después de estos partidos?", ja: "激しいバトルの後は, その週の通常の配信配信内容を少し緩めたりするのですか？" },
        { en: "What's one goal you want to achieve in the next official TikTok ranking event?", es: "¿Cuál es una meta que quieres lograr en el próximo evento oficial?", ja: "次回のTikTok公式ランキングイベントで、達成したい具体的な目標は何？" }
      ]
    },
    "Làm quen (Connect)": {
      "Cool / tự nhiên": [
        { en: "Your TikTok caught my attention… your posts are really interesting. Mind if we get to know each other?", es: "Tu TikTok me llamó la atención... tus publicaciones son muy interesantes. ¿Te importa si nos conocemos?", ja: "あなたのTikTokに目を奪いました…投稿がとても面白いです。お互い知り合いになりませんか？" },
        { en: "I keep seeing your videos on my FYP. Your content style is top tier.", es: "Sigo viendo tus videos en mi FYP. El estilo de tu contenido es de primer nivel.", ja: "おすすめ（FYP）によくあなたの動画が出てきます。動画のセンスがズバ抜けてますね。" },
        { en: "You seem to have a really interesting circle. Would love to connect sometime.", es: "Pareces tener un círculo muy interesante. Me encantaría conectar en algún momento.", ja: "base とても面白そうな世界観を持っていますね。ぜひ一度お話ししてみたいです。" },
        { en: "Your editing style is so unique. Do you collaborate with other creators?", es: "Tu estilo de edición es muy único. ¿Colaboras con otros creadores?", ja: "編集のスタイルが独特で素敵です。他のクリエイターとコラボしたりしますか？" },
        { en: "I like the aesthetic you're building here. Let's exchange ideas sometime.", es: "Me gusta la estética que estás construyendo aquí. Intercambiemos ideas alguna vez.", ja: "このアカウントの統一感が好きです。いつかクリエイティブな情報交換をしましょう。" },
        { en: "Your profile has a distinct charm. Definitely stood out from my usual feed.", es: "Tu perfil tiene un encanto distinto. Definitivamente se destacó de mi feed habitual.", ja: "プロフィールから独自の魅力を感じます。いつものタイムラインの中で完全に目立っていました。" },
        { en: "You don't post often, but when you do, it's always high quality.", es: "No publicas a menudo, pero cuando lo haces, siempre es de alta calidad.", ja: "投稿頻度は低めだけど、毎回クオリティが高くて楽しみにしています。" },
        { en: "Your video concepts are genius. Are you working on a new project?", es: "Los conceptos de tus videos son geniales. ¿Estás trabajando en un nuevo proyecto?", ja: "動画の企画が天才的ですね。今は何か新しいプロジェクトを進行中ですか？" },
        { en: "The background track choices are always spot on. You've got great taste.", es: "Las elecciones de la pista de fondo siempre son acertadas. Yg tienes un gran gusto.", ja: "使っているBGM의 センスがいつも抜群です。音楽の趣味が良いですね。" },
        { en: "Dropped a follow because your profile vibe is genuine. Talk soon!", es: "Dejé un follow porque la vibra de tu perfil es genuina. ¡Hablamos pronto!", ja: "飾らない雰囲気が素敵だったのでフォローしました。またお話ししましょう！" }
      ],
      "Warm / genuine": [
        { en: "Your videos always bring a lot of comfort to my day. Thank you!", es: "Tus videos siempre traen mucho consuelo a mi día. ¡Gracias!", ja: "あなたの動画を見るといつも心がホッとします。素敵な投稿をありがとう！" },
        { en: "You have a very kind way of responding to comments. It’s lovely to see.", es: "Tienes una forma muy amable de responder a los comentarios. Es encantador.", ja: "コメントへの返し方がいつも丁寧で心が温まります。人柄が滲み出ていますね。" },
        { en: "I really enjoy your perspective on things. Hope we can be friends here.", es: "Realmente disfruto tu perspectiva de las cosas. Espero que seamos amigos.", ja: "物事の捉え方がすごく共 cảm できます。ここで仲良くなれたら嬉しいです。" },
        { en: "Your account is a hidden gem. Sending you lots of positive support!", es: "Tu cuenta es una gema oculta. ¡Te envío mucho apoyo positivo!", ja: "このアカウントはもっと伸びるべき隠れた名作！これからも応援しています。" },
        { en: "It feels like you truly care about the community you're building.", es: "Se siente como si realmente te importara la comunidad que estás construyendo.", ja: "フォロワーさんたちをとても大切にしているのが分かります。素敵な場所ですね。" },
        { en: "Every time you post, it brightens up my whole feed. Have a beautiful day!", es: "Cada vez que publicas, alegras todo mi feed. ¡Que tengas un hermoso día!", ja: "投稿が流れてくるたびにタイムラインが明るくなります。今日も良い一日を！" },
        { en: "Your creative energy is so inspiring. Thanks for being so authentic.", es: "Tu energía creativa es muy inspiradora. Gracias por ser tan auténtico.", ja: "クリエイティブな表現にいつも刺激を受けています。ありのままで素敵です。" },
        { en: "I’ve been silently watching your progress, you’re doing amazing work.", es: "He estado viendo silenciosamente tu progreso, estás haciendo un trabajo increíble.", ja: "いつも密かに動画を拝見していました。どんどんクオリティが上がって凄いです。" },
        { en: "You seem like a person with a big heart. Glad I stumbled upon your page.", es: "Pareces una persona con un gran corazón. Me alegra haber encontrado tu página.", ja: "とても心の広い優しい方なんだろうなと思います。出会えて良かったです。" },
        { en: "Wishing you nothing but success on your content journey. Keep shining!", es: "Deseándote nada más que éxito en tu viaje de contenido. ¡Sigue brillando!", ja: "これからの発信活動が成功することを楽しみにしています。顔晴ってください！" }
      ],
      "Light flirt (subtle)": [
        { en: "I came for the content, but I think I’m staying for the creator.", es: "Vine por el contenido, pero creo que me quedo por el creador.", ja: "最初は動画が目的だったけど、今は投稿者さん本人に夢中かも。" },
        { en: "Your profile is a bit dangerous... it makes me want to text you directly.", es: "Tu perfil es un poco peligroso... me hace querer msn trực tiếp.", ja: "このアカウントはちょっと危険。タイムラインで見るたびDMしたくなっちゃう。" },
        { en: "Are you this charming in real life too, or is it just a TikTok magic?", es: "¿Eres así de encantador en la vida real también o solo magia de TikTok?", ja: "リアルでもそんなに魅力的な人なの？それともTikTokの魔法？" },
        { en: "I don't normally leave comments, but your smile forced me to.", es: "Normalmente no dejo comentarios, pero tu sonrisa me obligó a hacerlo.", ja: "普段はコメントしないんだけど、あなたの笑顔が素敵すぎてつい書いちゃいました。" },
        { en: "Let’s skip the small talk in public. Check your inbox sometime?", es: "Saltémonos las charlas públicas. ¿Revisas tu bandeja de entrada luego?", ja: "公開の場での挨拶はここまでにして…あとでDMチェックしてみてね？" },
        { en: "You have a very attractive way of telling stories. Quite captivating.", es: "Tienes una forma muy atractiva de contar historias. Bastante cautivador.", ja: "話し方や表現に色気があって、すっかり引き込まれてしまいました。" },
        { en: "If we went to the same school/office, I’d probably get zero work done.", es: "Si fuéramos a la misma escuela/oficina, probablemente no haría nada de trabajo.", ja: "もし学校や職場が同じだったら、あなたに見惚れて仕事にならなかったと思う。" },
        { en: "Your vibe completely reset my mood tonight. Quite a healer, aren't you?", es: "Tu vibra restableció por completo mi humor esta noche. Eres un sanador, ¿verdad?", ja: "動画を見たら今夜の疲れが全部吹き飛びました。私の専属の癒やしになって？" },
        { en: "I can't decide if I want to match your aesthetic or just be next to you.", es: "No puedo decidir si quiero igualar tu estética o solo estar a tu lado.", ja: "あなたのおしゃれな世界観に憧れるか、あなたの隣の席を狙うか、迷うな。" },
        { en: "You look like trouble, but the kind of trouble I wouldn't mind getting into.", es: "Pareces un problema, pero del tipo de problema en el que no me importaría meterme.", ja: "ちょっとモテそうで危ない雰囲気。でも, そんなトラブルなら飛び込んでみたい。" }
      ],
      "Playful": [
        { en: "Your videos are elite, but who handles your blooper reels? Need to see!", es: "Tus videos son élite, ¿pero quién maneja tus bloopers? ¡Necesito ver!", ja: "動画のクオリティは完璧だけど、NG集とか無いの？絶対面白いから見たい！（笑）" },
        { en: "I’ve watched this 5 times and I still don't understand the physics of it.", es: "He visto esto 5 veces y todavía no entiendo la física de esto.", ja: "5回ループ再生したけど、どういうトリックなのか脳が追いつかない（笑）" },
        { en: "If this post doesn't reach a million views, I’m calling the TikTok manager.", es: "Si esta publicación no llega al millón, llamaré al gerente de TikTok.", ja: "この動画が100万再生行かなかったら, TikTokの運営にクレーム入れるレベル。" },
        { en: "Your aesthetic makes my life look like a low-budget black and white movie.", es: "Tu estética hace que mi vida parezca una película de bajo presupuesto.", ja: "あなたがおしゃれすぎて、私の日常が低予算のモノクロ映画に見えてきた。" },
        { en: "Wait... are you a full-time creator or do you just flex on us part-time?", es: "Espera... ¿eres creador de tiempo completo o solo nos presumes a tiempo parcial?", ja: "待って、本業のプロなの？それとも副業でサラッとこの天才クオリティ出してるの？" },
        { en: "Teach me your skills! My currently editing skill is just adding a dog filter.", es: "¡Enséñame tus habilidades! Mi edición actual là chỉ là thêm bộ lọc chó.", ja: "動画編集のコツ教えて！私の今の限界は犬のフィルターつけることだけ（笑）" },
        { en: "I accidentally liked this, then unliked, then liked again. Multi-tasking!", es: "Le di like sin querer, luego lo quité, luego le di de nuevo. ¡Multitarea!", ja: "間違えていいねして、消して、また押し直した。ハート連打の練習ね！" },
        { en: "Your algorithm brought you to me. Congratulations, you won an active follower!", es: "Tu algoritmo te trajo a mí. ¡Felicidades, ganaste un seguidor activo!", ja: "アルゴリズムがあなたを選びました。おめでとう、熱狂的なフォロワーの獲得です！" },
        { en: "Are we supposed to look at the transition or your dynamic expressions?", es: "¿Se supone que debemos mirar la transición o tus expresiones?", ja: "動画の画面切り替え（トランジション）を見るべき？それとも顔芸を見るべき？（笑）" },
        { en: "Okay, who allowed you to be this creative? Is there a license for that?", es: "Vale, ¿quién te permitió ser tan creativo? ¿Hay una licencia para eso?", ja: "ちょっとクリエイティブの才能が暴走してない？国家資格レベルだよ。" }
      ],
      "Deep / mysterious (idol vibe)": [
        { en: "You speak through visuals with a depth that words fail to capture.", es: "Hablas a través de imágenes con una profundidad que las palabras no capturan.", ja: "言葉をあえて使わない映像表現に、計り知れない深みを感じます。" },
        { en: "The narrative you're weaving across your timeline is subtle but profound.", es: "La narrativa que estás tejiendo en tu línea de tiempo es sutil pero profunda.", ja: "タイムライン全体に散りばめられた物語、静かだけど奥が深いですね。" },
        { en: "A solitary voice in a saturated digital landscape. Distinct presence.", es: "Una voz solitaria en un panorama digital saturado. Presencia distinta.", ja: "ノイズの多いネット社会における、孤高の表現者。圧倒的な個性が光ります。" },
        { en: "You don't chase trends, you create an atmosphere that outlasts them.", es: "No persigues tendencias, creas una atmósfera que las sobrevive.", ja: "流行を追うのではなく、流行が去った後も残る「空気感」を作っている。" },
        { en: "There is an unresolved mystery in your edits. It leaves me thinking.", es: "Hay un misterio sin resolver en tus ediciones. Me deja pensando.", ja: "編集の余白に謎が隠されているよう。見終わった後もずっと考えてしまう。" },
        { en: "You display just enough to capture interest, keeping the rest in darkness.", es: "Muestras lo justo para captar el interés, manteniendo el resto a oscuras.", ja: "すべてを明かさず、好奇心をそそる部分だけを見せる。見事なセルフプロデュース。" },
        { en: "Your account feels like a secret gallery hidden away from the mainstream noise.", es: "Tu cuenta se siente como una galería secreta escondida del ruido común.", ja: "ここは、大衆の喧騒から隔離された「秘密の美術館」のようですね。" },
        { en: "An author of moods, a painter of shadows. Exceptionally artistic profile.", es: "Un autor de estados de ánimo, un pintor de sombras. Perfil excepcional.", ja: "光と影を操る芸術家のようなアカウント。唯一無二の世界観です。" },
        { en: "You remain detached from the viewer, which makes your persona even stronger.", es: "Te mantienes distante del espectador, lo que hace tu personaje más fuerte.", ja: "視聴者に媚びない適度な距離感が、あなたのカリスマ性をさらに際立たせている。" },
        { en: "The sequence of your clips works like a lucid dream. Deeply magnetic.", es: "La secuencia de tus clips funciona como un sueño lúcido. Profundamente magnético.", ja: "流れるようなクリップの連続が、まるで心地よい白昼夢のよう。惹きつけられます。" }
      ],
      "Kéo hội thoại sâu hơn": [
        { en: "What original concept sparked the creation of this entire account?", es: "¿Qué concepto original inspiró la creación de toda esta cuenta?", ja: "このアカウントの独自の世界観は、どういった着想から生まれたのですか？" },
        { en: "How long does it typically take you to storyboard a single 15-second clip?", es: "¿Cuánto tiempo te toma estructurar un solo clip de 15 segundos?", ja: "わずか15秒の動画の絵コンテや構成に、どれくらいの時間をかけているの？" },
        { en: "Has your perspective on content creation changed since your first viral video?", es: "¿Ha cambiado tu perspectiva sobre la creación desde tu primer video viral?", ja: "最初の動画がバズった時と今とで、発信に対するスタンスは変わりましたか？" },
        { en: "What is the biggest message you want viewers to take away from your profile?", es: "¿Cuál es el mayor mensaje que quieres que los espectadores se lleven?", ja: "あなたのアカウントを訪れた人に、一番感じ取ってほしいテーマは何ですか？" },
        { en: "Do you get your inspiration from modern cinema or classical photography?", es: "¿Obtienes tu inspiración del cine moderno o de la fotografía clásica?", ja: "映像のインスピレーションは、現代映画から？それともクラシック写真から？" },
        { en: "What's the hardest technical skill you had to learn for these transitions?", es: "¿Cuál fue la habilidad técnica más difícil de aprender para estos efectos?", ja: "この滑らかな画面切り替え（効果）を習得するのに、一番苦労した技術は？" },
        { en: "How do you maintain consistency without losing your core artistic freedom?", es: "¿Cómo mantienes la consistencia sin perder tu libertad artística?", ja: "アカウントの統一感を守りつつ、自分の作りたい表現を自由に爆発させるコツは？" },
        { en: "Are there any hidden references in this video that only core fans notice?", es: "¿Hay referencias ocultas en este video que solo los fans principales notan?", ja: "この動画の中に、コアなファンだけが気づく「隠し要素」って仕込んでありますか？" },
        { en: "Do you plan to expand your style into longer documentary formats soon?", es: "¿Planeas expandir tu estilo a formatos de documental más largos pronto?", ja: "今後は、より長尺のドキュメンタリーやYouTubeのような形式にも挑戦する予定は？" },
        { en: "What has been the most rewarding connection you’ve made through TikTok so far?", es: "¿Cuál ha sido la conexión más gratificante que has hecho a través de TikTok?", ja: "TikTokの発信を通じて出会った人の中で、一番刺激的だった出会いはどんなもの？" }
      ]
    },
    "Hỏi về công việc": {
      "Cool / natural": [
        { en: "What do you usually do for work? Is that your job? It’s pretty unique… you must be really good at it.", es: "¿Qué haces normalmente de trabajo? ¿Ese es tu empleo? Es bastante único... debes ser muy bueno en eso.", ja: "普段はどんなお仕事をしているのですか？ユニークですね…きっとすごく仕事ができる方なんだろうな。" },
        { en: "That industry requires serious dedication. How long have you been in this field?", es: "Esa industria requiere una seria dedicación. ¿Cuánto tiempo llevas en este campo?", ja: "その業界はかなりの専門知識が必要ですよね。この仕事を始めて長いのですか？" },
        { en: "You talk about your field with a lot of expertise. Is it a family business?", es: "Hablas de tu campo con mucha experiencia. ¿Es un negocio familiar?", ja: "お仕事についてとても詳しく語られていますね。家業か何かなのですか？" },
        { en: "Managing projects like that looks intense. What's your daily tech stack?", es: "Gestionar proyectos así parece intenso. ¿Cuál es tu pila tecnológica diaria?", ja: "そのようなプロジェクトの管理は大変そうですね。普段はどんなツールを使っているのですか？" },
        { en: "The professional layout in your office looks crisp. Do you work remotely?", es: "El diseño profesional de tu oficina se ve impecable. ¿Trabajas de forma remota?", ja: "オフィスのレイアウトがとてもスマートですね。完全リモートワークですか？" },
        { en: "That looks like a lot of responsibility. How do you handle executive stress?", es: "Eso parece mucha responsabilidad. ¿Cómo manejas el estrés ejecutivo?", ja: "責任の大きなポジションとお見受けしました。仕事のプレッシャーはどう解消していますか？" },
        { en: "Your career path seems highly strategic. Did you study this abroad?", es: "Tu trayectoria profesional parece altamente estratégica. ¿Estudiaste esto en el extranjero?", ja: "非常に戦略的なキャリアを歩まれていますね。海外で勉強された経験があるのですか？" },
        { en: "Brilliant execution on that launch. Is your team locally based?", es: "Brillante ejecución en ese lanzamiento. ¿Tu equipo tiene base local?", ja: "あのローンチの成功は見事でした。チームのメンバーは国内ベースですか？" },
        { en: "You make consulting look so smooth. What's the biggest challenge this quarter?", es: "Haces que la consultoría parezca tan fluida. ¿Cuál es el mayor desafío este trimestre?", ja: "コンサルティングをとてもスマートにこなしますね。今期の最大の課題は何ですか？" },
        { en: "High energy workspace. Do you mentor newcomers in your industry?", es: "Espacio de trabajo de alta energía. ¿Sueles ser mentor de recién llegados en tu industria?", ja: "活気のある職場ですね。業界の若手の育成やメンターなどもされているのですか？" }
      ],
      "Warm / genuine": [
        { en: "Your dedication to your work is truly inspiring. Keep making an impact!", es: "Tu dedicación a tu trabajo es realmente inspiradora. ¡Sigue causando impacto!", ja: "お仕事への情熱、本当に尊敬します。これからもたくさんの人を幸せにしてください！" },
        { en: "It feels so rewarding to see someone love their profession this much.", es: "Se siente tan gratificante ver a alguien amar tanto su profesión.", ja: "自分の仕事をこれほど愛している姿を見られるのは、とても素晴らしいことです。" },
        { en: "Balancing work and personal creativity is hard, but you handle it beautifully.", es: "Equilibrar el trabajo y la creatividad es difícil, lo manejas hermosamente.", ja: "仕事と個人の創作活動の両立は大変なのに、見事にこなしていて凄いです。" },
        { en: "The work environment you built looks so supportive and welcoming.", es: "El ambiente de trabajo que construiste se ve tan acogedor.", ja: "あなたが作った職場の雰囲気、とても温かくて働きやすそうですね。" },
        { en: "Wishing you a highly productive week ahead! Take care of your health too.", es: "¡Deseándote una semana muy productiva! Cuida tu salud también.", ja: "今週もお仕事の成果がたくさん出ますように！体調崩さないよう気をつけてね。" },
        { en: "You always explain complex industry terms with so much patience. Thank you!", es: "Siempre explicas términos complejos con mucha paciencia. ¡Gracias!", ja: "難しい専門用語をいつも分かりやすく噛み砕いて説明してくれて、ありがとう！" },
        { en: "That breakdown of your daily tasks was super helpful. Learned a lot today.", es: "Ese desglose de tus tareas diarias fue súper útil. Aprendí mucho hoy.", ja: "一日の業務ルーティンの解説、すごく勉強になりました。ためになった！" },
        { en: "A true professional with a warm heart. Your clients are very lucky.", es: "Un verdadero profesional con un corazón cálido. Tus clientes tienen suerte.", ja: "温かい心を持った本物のプロフェッショナル。クライアントは本当に幸せ者ですね。" },
        { en: "Your passion makes even boring corporate details sound exciting.", es: "Tu pasión hace que incluso los detalles aburridos suenen emocionantes.", ja: "あなたの熱量があるから、一見地味な業務内容もワクワクして聞こえます。" },
        { en: "Behind every success is hours of silent grind. Respect your journey.", es: "Detrás de cada éxito hay horas de trabajo silencioso. Respeto tu camino.", ja: "成功の裏には、人知れぬ毎日の積み重ねがあるんですね。その歩みを応援します。" }
      ],
      "Light flirt (subtle)": [
        { en: "You look incredibly sharp in your professional attire. Highly dynamic vibe.", es: "Te ves increíblemente elegante con tu ropa profesional. Viba muy dinámica.", ja: "ビジネススーツ/作業服姿、めちゃくちゃスマートで色気がありますね。" },
        { en: "If you were my manager, I’d probably volunteer for overtime every day.", es: "Si fueras mi gerente, probablemente me ofrecería para horas extras diario.", ja: "もしあなたが私の上司だったら、毎日喜んで残業申請しちゃいます。" },
        { en: "Business meetings must get a lot more interesting when you walk in.", es: "Las reuniones de negocios deben volverse mucho más interesantes cuando entras.", ja: "あなたが会議室に入ってきたら、一気に場の空気が華やかになりそう。" },
        { en: "You talk about corporate strategy with so much charm. Very attractive.", es: "Hablas de estrategia corporativa con tanto encanto. Muy atractivo.", ja: "ビジネス戦略の解説なのに、話し方に色気があってドキドキしちゃう。" },
        { en: "Are you recruiting any personal assistants? I have excellent dedication.", es: "¿Estás contratando asistentes personales? Tengo una excelente dedicación.", ja: "専属のアシスタントは募集してませんか？全力であなたをサポートしますよ？" },
        { en: "A powerful career for an equally captivating personality. Quite the catch.", es: "Una carrera poderosa para una personalidad cautivadora. Un gran partido.", ja: "一流のキャリアと、人を魅了するルックス。完璧すぎて隙がないですね。" },
        { en: "Let’s schedule a private consulting session. My schedule is wide open.", es: "Programemos una sesión de consultoría privada. Mi agenda está abierta.", ja: "二人きりの個別コンサルティングの予定を入れましょう。私の枠はいつでも空いてます。" },
        { en: "You make working long hours look so sophisticated. Beautiful focus.", es: "Haces que trabajar largas horas se vea tan sofisticado. Hermoso enfoque.", ja: "遅くまで働く姿すらスタイリッシュ。その真剣な眼差しに惹かれます。" },
        { en: "I bet you command the entire room during presentations. Magnetic energy.", es: "Apuesto a que dominas toda la sala durante las presentaciones. Energía magnética.", ja: "プレゼン中のあなたは、きっと会場全員のハートを掴んでいるんでしょうね。" },
        { en: "Success looks exceptionally good on you. Keep dominating your field.", es: "El éxito te queda excepcionalmente bien. Sigue dominando tu campo.", ja: "「成功」という二文字がこれほど似合う人はいません。惚れ惚れします。" }
      ],
      "Playful": [
        { en: "Do you get paid in cash or do they just give you infinite coffee credits?", es: "¿Te pagan en efectivo o solo te dan créditos de café infinitos?", ja: "お給料は現金？それとも社内でコーヒーが無限に飲める権利？（笑）" },
        { en: "Your desk looks like a NASA control center. Are we launching a rocket soon?", es: "Tu escritorio parece un centro de control de la NASA. ¿Lanzamos un cohete?", ja: "デスクの周りがNASAのコントロールセンターみたい。そろそろ宇宙船打ち上げる？" },
        { en: "Please teach me how to look busy while doing absolutely nothing at work.", es: "Por favor, enséñame cómo parecer ocupado sin hacer absolutamente nada.", ja: "何も仕事してないのに、めちゃくちゃ忙しそうに見せるプロの技術を教えて（笑）" },
        { en: "If spreadsheets were an Olympic sport, you'd definitely win gold.", es: "Si las hojas de cálculo fueran un deporte olímpico, ganarías el oro.", ja: "もしExcelのデータ入力がオリンピック種目なら、確実に金メダルだね。" },
        { en: "Are you hiring? My skills include heavy caffeine consumption and heavy nodding.", es: "¿Están contratando? Mis habilidades incluyen alto consumo de cafeína.", ja: "求人募集してる？私の特技は、コーヒーを大量に飲むことと、会議で深く頷くことだよ！" },
        { en: "This workflow configuration looks like a complex puzzle. Brain expansion achieved!", es: "Esta configuración de flujo de trabajo parece un rompecabezas complejo.", ja: "この業務フロー、もはや複雑なパズルゲームじゃん。脳の容量超えました！" },
        { en: "Your professional routine gave me motivation to work, but then my bed called.", es: "Tu rutina profesional me dio motivación, pero luego mi cama me llamó.", ja: "動画を見て仕事のやる気が出た！と思った1秒後、ベッドの誘惑に負けました。" },
        { en: "Do you ever accidentally reply with 'Best regards' to your family group chats?", es: "¿Alguna vez respondes por error con 'Atentamente' a tus chats familiares?", ja: "家族のLINEグループに、間違えて「いつもお世話になっております」って送りそうにならない？" },
        { en: "A corporate warrior fighting the evil army of unread emails. Godspeed!", es: "Un guerrero corporativo luchando contra el ejército de correos. ¡Buena suerte!", ja: "未読メールの山という悪の軍団と戦う企業戦士。健闘を祈る！（笑）" },
        { en: "You look like the boss who rejects my vacation request but does it with a smile.", es: "Pareces el jefe que rechaza mi solicitud de vacaciones pero con una sonrisa.", ja: "有給申請を笑顔のままバッサリ却下しそうな、仕事が出来るボスの風格だね。" }
      ],
      "Deep / mysterious (idol vibe)": [
        { en: "The architectural depth of corporate structures hides the real architects.", es: "La profundidad arquitectónica de las corporaciones oculta a los arquitectos.", ja: "巨大な組織の階層構造の裏には、常に真の支配者が潜んでいる。" },
        { en: "You navigate market volatility with a calmness that borders on detachment.", es: "Navegas la volatilidad del mercado con una calma que raya en el desapego.", ja: "市場の激しい荒波を、冷徹なまでの静けさで平然と渡り歩いていますね。" },
        { en: "True professionals don't broadcast their numbers; their status speaks itself.", es: "Los verdaderos profesionales no publican sus números; su estatus habla solo.", ja: "本物のプロは成果を誇示しない。その佇まいそのものが、格の違いを物語る。" },
        { en: "A master of invisible leverage. Your moves are calculated months in advance.", es: "Un maestro del apalancamiento invisible. Tus movimientos están calculados.", ja: "見えないレバレッジを操る黒幕。すべての布石は数ヶ月前から計算されている。" },
        { en: "Behind the cold metrics lies an absolute philosophy of pure execution.", es: "Detrás de las métricas frías hay una filosofía absoluta de ejecución pura.", ja: "冷徹な数字の羅列の奥底に、完璧な実行力という絶対的な哲学が眠っている。" },
        { en: "You don't play inside the industry rules; you subtly recalibrate them.", es: "No juegas dentro de las reglas de la industria; las recalibras sutilmente.", ja: "業界のルールに従って動くのではない。あなたがルールを静かに書き換えているのだ。" },
        { en: "Your workplace aesthetic functions like a high-stakes chess match. Enigmatic.", es: "La estética de tu lugar de trabajo funciona como el ajedrez de alto nivel.", ja: "オフィスの雰囲気が、まるで高額な賭けチェス盤のような緊迫感。知的な謎です。" },
        { en: "A quiet anchor in a hyperactive business economy. Deep focus.", es: "Ancla silenciosa en una economía empresarial hiperactiva. Enfoque profundo.", ja: "激動する経済の濁流の中で、微動だにしない絶対的なアンカー。深い集中。" },
        { en: "You carry the weight of decisions without ever letting the strain show.", es: "Llevas el peso de las decisiones sin dejar que se note la tensión.", ja: "重大な決断の重圧を背負いながら、表情には微塵の動揺も表さない。" },
        { en: "An old school work ethic executed with cutting-edge modern tools.", es: "A old school work ethic ejecutada con herramientas modernas de vanguardia.", ja: "古き良き職人魂のような仕事哲学を、最先端のシステムでスマートに執行している。" }
      ],
      "Kéo hội thoại sâu hơn": [
        { en: "What original challenge inspired you to pivot into this specific career?", es: "¿Qué desafío original te inspiró a pivotar hacia esta carrera específica?", ja: "そもそも、あなたがこの特殊な業界を自らのキャリアとして選んだきっかけは？" },
        { en: "How do you separate your personal creative self from your professional identity?", es: "¿Cómo separas tu ser creativo personal de tu identidad profesional?", ja: "個人のクリエイティブな自分と、プロとしてのビジネス仮面、どう切り替えている？" },
        { en: "What's the most high-stakes negotiation you've ever had to close?", es: "¿Cuál es la negociación de más alto riesgo que has tenido que cerrar?", ja: "これまでで、一番プレッシャーのかかった緊迫した交渉劇はどんな内容だった？" },
        { en: "Does your line of work change the way you observe human behavior in daily life?", es: "¿Tu trabajo cambia la forma en que observas el comportamiento humano?", ja: "今のお仕事の職業病で、日常生活の人の行動を分析しちゃったりしますか？" },
        { en: "What major industry trend do you foresee reshaping your field next year?", es: "¿Qué gran tendencia de la industria prevés que remodelará tu campo?", ja: "来年以降、あなたの業界を完全に激変させると思われる最大のトレンドは何？" },
        { en: "How did you manage to build your initial client network from scratch?", es: "¿Cómo lograste construir tu red inicial de clientes desde cero?", ja: "実績がまだ何もなかった初期の頃、どうやって最初の顧客網を開拓したのですか？" },
        { en: "What is the single most valuable piece of career advice you've ever received?", es: "¿Cuál es el consejo profesional más valioso que đã nhận được?", ja: "これまでのキャリアの中で、一番目から鱗が落ちた最高のアドバイスは何ですか？" },
        { en: "Does maintaining this level of executive output require a strict sleeping routine?", es: "¿Mantener este nivel de producción requiere una rutina estricta de sueño?", ja: "この超人的なパフォーマンスを維持するために、睡眠や食事の厳しいルールはある？" },
        { en: "What is a project you had to decline recently that you wish you could have done?", es: "¿Qué proyecto tuviste que rechazar recientemente que desearías haber hecho?", ja: "最近、リソース不足などで泣く泣く辞退した、本当はやりたかった仕事はある？" },
        { en: "Where do you see your corporate or business footprint expanding in five years?", es: "¿Dónde ves expandirse tu huella corporativa o comercial en cinco años?", ja: "5年後、あなたのビジネスや組織の規模はどこまで拡大していると思いますか？" }
      ]
    },
    "Khen đẹp trai": {
      "Cool / natural": [
        { en: "You’ve got a really cool vibe today… what are you up to?", es: "Tienes una vibra muy genial hoy... ¿qué estás haciendo?", ja: "今日の雰囲気、めちゃくちゃカッコいいですね…何しているんですか？" },
        { en: "Sharp outfit. The tailoring fits your structure perfectly.", es: "Atuendo nítido. El sastre se adapta perfectamente a tu estructura.", ja: "服装の着こなしが完璧ですね。シルエットが体型に美しくフィットしています。" },
        { en: "You carry yourself with a lot of confidence. Great posture.", es: "Te manejas con mucha confianza. Gran postura.", ja: "堂々とした立ち振る舞いが素敵です。姿勢がとても綺麗ですね。" },
        { en: "That haircut frames your face perfectly. Very clean profile.", es: "Ese corte de pelo enmarca tu rostro perfectamente. Perfil muy limpio.", ja: "髪型が輪郭に完璧にマッチしています。横顔のラインがとても綺麗です。" },
        { en: "Natural screen presence. You look like you belong in a magazine ad.", es: "Presencia natural en pantalla. Pareces pertenecer a un anuncio de revista.", ja: "画面映えが半端ないです。まるで雑誌の広告モデルを見ているかのよう。" },
        { en: "Effortless style. Even a simple tee looks high fashion on you.", es: "Estilo sin esfuerzo. Incluso una camiseta simple se ve de alta costura en ti.", ja: "着こなしが自然体。シンプルなTシャツ一枚でもハイブランドのように見えます。" },
        { en: "Strong facial features, especially under this dynamic lighting.", es: "Rasgos faciales fuertes, especialmente bajo esta iluminación dinámica.", ja: "顔立ちの彫りが深くて素敵です。特にこのライティングだと陰影が映えますね。" },
        { en: "You have that classic model build. Do you spend a lot of time in the gym?", es: "Tienes esa complexión clásica de modelo. ¿Pasas mucho tiempo en el gimnasio?", ja: "まさにモデル体型ですね。普段からかなりジムで鍛えられているのですか？" },
        { en: "The glasses add a very sophisticated touch. Sharp look.", es: "Las gafas añaden un toque muy sofisticado. Aspecto nítido.", ja: "メガネがとても知的なアクセントになっていますね。クールなルックスです。" },
        { en: "Aesthetic on point. Your look matches the modern cinematic theme completely.", es: "Estética en su punto. Tu look coincide completamente con el tema cinematográfico.", ja: "ビジュアルの完成度が高すぎます。モダンで映画的な世界観に完璧に溶け込んでいます。" }
      ],
      "Warm / genuine": [
        { en: "Your smile is so bright, it instantly warms up the whole timeline.", es: "Tu sonrisa es tan brillante que instantáneamente calienta toda la línea de tiempo.", ja: "くしゃっとした笑顔が本当に素敵。タイムラインが一気に明るくなりますね。" },
        { en: "You have very kind eyes. A beautiful balance of strength and warmth.", es: "Tienes ojos muy amables. Un hermoso equilibrio de fuerza y calidez.", ja: "とても優しい目をされていますね。強さと温かさが同居していて魅力的です。" },
        { en: "Love the clean, natural look. Your genuine energy really shines through.", es: "Me encanta el aspecto limpio y natural. Tu energía genuina realmente brilla.", ja: "ナチュラルで清潔感のあるスタイル、大好きです。誠実な人柄が伝わります。" },
        { en: "You look glowing and healthy! Hope you’re taking good care of yourself.", es: "¡Te ves radiante y saludable! Espero que te estés cuidando bien.", ja: "肌もツヤツヤで健康的、すごくお綺麗です！毎日ちゃんと休めていますか？" },
        { en: "That hair color suits your skin tone perfectly. Wonderful choice.", es: "Ese color de cabello se adapta perfectamente a tu tono de piel. Maravillosa elección.", ja: "その髪色、あなたの肌のトーンに完璧に似合っています。本当に大正解のチョイス！" },
        { en: "Your posture looks so graceful. True elegance in simplicity.", es: "Tu postura se ve tan elegante. Verdadera elegancia en la simplicidad.", ja: "立ち姿が凛としていて美しいです。シンプルな服だからこそ気品が引き立ちます。" },
        { en: "The smile at the very end of the video was so heartwarming.", es: "La sonrisa al final del video fue muy reconfortante.", ja: "動画の最後の最後に見せた、はにかんだ笑顔が最高に可愛かったです。" },
        { en: "You look like someone who is beautiful both inside and out.", es: "Pareces alguien que es hermoso tanto por dentro como por fuera.", ja: "外見の美しさはもちろん、内面の心の綺麗さも顔に溢れ出ていますね。" },
        { en: "Every time you post, I'm reminded of how refreshing your style is.", es: "Cada vez que publicas, recuerdo lo refrescante que es tu estilo.", ja: "投稿を見るたびに、あなたの爽やかなルックスに心が洗われるようです。" },
        { en: "Sending you positive thoughts. Your good looks match your kind spirit.", es: "Enviándote pensamientos positivos. Tu buena apariencia coincide con tu espíritu.", ja: "応援のエネルギーを送ります。整ったお顔立ちにふさわしい、優しい心の持ち主ですね。" }
      ],
      "Light flirt (subtle)": [
        { en: "I had to pause the video just to appreciate how beautiful you look tonight.", es: "Tuve que pausar el video solo para apreciar lo hermoso que te ves esta noche.", ja: "画面を一時停止して、あなたのあまりの顔の良さに見惚れちゃいました。" },
        { en: "You should come with a warning label. Too attractive for my heart.", es: "Deberías venir con una etiqueta de advertencia. Demasiado atractivo para mi corazón.", ja: "「心臓注意」の警告ラベルを貼って投稿して。モテすぎて心臓に悪いです（cười）" },
        { en: "Are you single by choice or are you just waiting for me to leave a comment?", es: "¿Estás soltero por elección o solo esperas a que deje un comentario?", ja: "あえてフリーでいるの？それとも私がコメント欄に現れるのを待ってたの？" },
        { en: "Your facial symmetry is unfair. Seriously, what's the secret?", es: "Tu simetría facial là không công bằng. En serio, ¿cuál es el secreto?", ja: "顔のパーツの配置が完璧すぎて不公平。遺伝子レベルで大勝利ですね。" },
        { en: "I can't look away from your eyes. They have a very dangerous pull.", es: "No puedo apartar la mirada de tus ojos. Tienen una atracción muy peligrosa.", ja: "その瞳に見つめられると視線が外せなくなる。吸い込まれそうな魔力がある。" },
        { en: "That jawline could literally cut glass. Incredibly sharp view.", es: "Esa línea de la mandíbula literalmente podría cortar vidrio. Vista afilada.", ja: "シャープなフェイスラインが美しすぎる。大人の色気が爆発してます。" },
        { en: "You look exactly like the main character of my favorite romance novel.", es: "Te ves exactamente como el personaje principal de mi novela romántica favorita.", ja: "私が大好きな恋愛小説の、完璧なイケメン主人公がそのまま現実に出てきたみたい。" },
        { en: "I wasn't having a good night, but your look completely fixed my mood.", es: "No estaba teniendo una buena noche, pero tu aspecto arregló mi humor.", ja: "ちょっと落ち込んでた夜だったけど、あなたのお顔を見たら一瞬で元気出た。" },
        { en: "If looking this good was a crime, you’d be serving a life sentence.", es: "Si lucir así de bien fuera un crimen, estarías cumpliendo cadena perpetua.", ja: "もしイケメンすぎることが罪になるなら、あなたは確実に終身刑だよ？" },
        { en: "There's a magnetic charm to your structure. Absolutely beautiful profile.", es: "Hay un encanto magnético en tu estructura. Perfil absolutamente hermoso.", ja: "骨格からして神懸かってますね。完璧な横顔の美しさに惚れ惚れします。" }
      ],
      "Playful": [
        { en: "Okay, save some good looks for the rest of us, please! Sharing is caring.", es: "Vale, ¡guarda algo de buena apariencia para el resto de nosotros, por favor!", ja: "ちょっとそのカッコよさ、少しは私ら凡人にも分けてよ！独占禁止！（笑）" },
        { en: "Did you drop from heaven or did you just use an illegal high-tier filter?", es: "¿Caíste del cielo o simplemente usaste un filtro ilegal de alto nivel?", ja: "天界から舞い降りてきたの？それとも国家機密レベルの最強フィルター？（笑）" },
        { en: "Your mirror must be very happy every morning. Respect the view!", es: "Tu espejo debe estar muy feliz cada mañana. ¡Respeto a la vista!", ja: "毎朝あなたを映せるご自宅の鏡が、世界一羨ましいわ！（笑）" },
        { en: "My phone battery went from 10% to 100% just from your electric vibe.", es: "La batería de mi teléfono pasó de 10% a 100% solo por tu vibra eléctrica.", ja: "あなたの顔面ビームの破壊力で、スマホのバッテリーが100%に回復したわ。" },
        { en: "Are you a professional model or do you just enjoy breaking the internet part-time?", es: "¿Eres modelo profesional o solo disfrutas romper el internet a tiempo parcial?", ja: "本職のモデルさん？それとも趣味でネットのサーバー落としに来てるの？" },
        { en: "I tried to recreate this pose in my mirror, I looked like a broken umbrella.", es: "Intenté recrear esta pose en mi espejo, parecía un paraguas roto.", ja: "鏡の前でそのポーズ真似してみたら、へし折れたコウモリ傘みたいになったわ（笑）" },
        { en: "This level of handsomeness should require a monthly subscription tax.", es: "Este nivel de guapura debería requerir un impuesto de suscripción mensual.", ja: "そのレベルのイケメン度合いは、国に「美形税」を毎月納めるべきレベル。" },
        { en: "Wait, does your driver's license photo actually look good too? That's impossible!", es: "Espera, ¿la foto de tu licencia también se ve bien? ¡Eso es imposible!", ja: "待って、もしかして免許証やマイナンバーの顔写真すらカッコいいの？あり得ん！" },
        { en: "Stop being this photogenic, it's making my front camera feel insecure.", es: "Deja de ser tan fotogénico, hace que mi cámara frontal se sienta insegura.", ja: "そんなに写真映えするのやめて、私のスマホのインカメラが自信なくしちゃう（笑）" },
        { en: "You won the genetic lottery today. What’s the secret prize?", es: "Ganaste la lotería genética hoy. ¿Cuál es el premio secreto?", ja: "遺伝子の宝くじで一 đới 億 mega 大当たりした男。前世でどれだけ徳を積んだの？" }
      ],
      "Deep / mysterious (idol vibe)": [
        { en: "Beauty that exists entirely in the shadows. Deeply captivating persona.", es: "Belleza que existe completamente en las sombras. Persona profundamente cautivadora.", ja: "暗闇の中にこそ完成する美学。底知れないカリスマ性を感じます。" },
        { en: "Your aesthetic feels detached from the noisy trends. Pure structural form.", es: "Tu estética se siente desprendida de las ruidosas tendencias. Forma pura.", ja: "喧騒のトレンドから完全に隔絶された美しさ。ただそこにあるだけで絵になる。" },
        { en: "The gaze is calm, but the presence demands total absolute silence.", es: "La mirada es tranquila, pero la presencia exige un silencio absoluto.", ja: "眼差しは穏やかなのに、その圧倒的な存在感が周囲に完全な静寂を強いる。" },
        { en: "A dynamic contrast of light and dark. You look like a sculpture in motion.", es: "Un contraste dinámico de luz y oscuridad. Pareces una escultura.", ja: "光と影のダイナミックなコントラスト。まるで動き出した大理石の彫刻のよう。" },
        { en: "You hold a composure that cannot be shaken by the crowd's gaze.", es: "Mantienes una compostura que no puede ser sacudida por la mirada de la multitud.", ja: "大衆の無数の視線を浴びながら、指先一つ、眉一つ動かさない絶対的な静寂。" },
        { en: "The cinematic tone completely subverts the standard profile setup. Exquisite.", es: "El tono cinematográfico subvierte por completo la configuración estándar.", ja: "映画的なトーンが、一般のビジュアル表現の基準を完全に超越している。極上。" },
        { en: "An enigma wrapped in a modern outfit. You carry a silent gravity.", es: "Un enigma envuelto en un atuendo moderno. Llevas una gravedad silenciosa.", ja: "モダンな衣装をまとった、解けないパズル。周囲を引き寄せる見えない重力。" },
        { en: "Some structures reflect the era, your look entirely creates its own.", es: "Algunas estructuras reflejan la era, tu look crea completamente la suya.", ja: "時代を映す容姿がある。だがあなたのルックスは、新しい時代そのものを創り出す。" },
        { en: "The perfection of form hides the chaotic strength beneath. Magnetic.", es: "La perfección de la forma oculta la fuerza caótica debajo. Magnético.", ja: "計算され尽くしたフォルmの奥底に、野生的な衝動が眠っている。強烈な磁力。" },
        { en: "A dark star in a universe of copycats. Flawless individuality.", es: "Una estrella oscura en un universo de imitadores. Individualidad impecable.", ja: "量産型の有象無象が溢れる世界に現れた、漆黒の明星。完璧な孤高。" }
      ],
      "Kéo hội thoại sâu hơn": [
        { en: "Do you prefer a sharp, styled professional look or the casual morning style?", es: "¿Prefieres un aspecto profesional elegante o el estilo casual de la mañana?", ja: "バシッと決めた髪型や衣装と、寝起きの完全カジュアルなオフスタイル、どっちが好き？" },
        { en: "Has your visual style been influenced by specific actors or classic films?", es: "¿Tu estilo visual ha sido influenciado por actores específicos o películas?", ja: "そのファッションや佇まいは、特定の俳優やクラシック映画の影響を受けているの？" },
        { en: "What's the one accessory you feel completely incomplete without?", es: "¿Cuál es el único accesorio sin el que te sientes completamente incompleto?", ja: "これだけは身につけていないと、外出するときに落ち着かないマストアイテムは？" },
        { en: "Does maintaining this look require a highly disciplined fitness routine?", es: "¿Mantener este aspecto requiere una rutina de ejercicios altamente disciplinada?", ja: "その抜群のスタイルを維持するために、どんなストイックな筋トレをこなしているの？" },
        { en: "How do you handle the constant attention when you walk into public spaces?", es: "¿Cómo manejas la atención constante cuando entras en espacios públicos?", ja: "街を歩いているとき、周囲からの視線や注目をどんな風にいなしているのですか？" },
        { en: "Did you design this specific hairstyle yourself or work with a stylist?", es: "¿Diseñaste este peinado específico tú mismo o con un estilista?", ja: "その絶妙な髪型のセットは、完全セルフプロデュース？それともお抱えのスタイリストがいるの？" },
        { en: "Does your appearance ever cause people to misjudge your personality?", es: "¿Tu apariencia hace que la gente juzgue mal tu personalidad?", ja: "ルックスが完璧すぎるせいで、第一印象で「冷たい人」だと誤解されたりしませんか？" },
        { en: "What's your go-to outfit when you want to disappear into the city unnoticed?", es: "¿Cuál es tu atuendo preferido cuando quieres desaparecer en la ciudad?", ja: "変装して街の雑踏に完全に紛れ込みたいとき、どんなコーディネートをする？" },
        { en: "Has anyone ever told you that you bear a resemblance to a high fashion brand model?", es: "¿Alguien te ha dicho que te pareces a un modelo de marca de alta costura?", ja: "ハイブランドのコレクションに出てくる海外のトップモデルに似てるって、言われたことある？" },
        { en: "If you had to change one single feature about your presentation, what would it be?", es: "Si tuvieras que cambiar una sola característica de tu presentación, ¿cuál sería?", ja: "もし自分のビジュアルやコーディネートで、一箇所だけ変えられるとしたらどこをいじる？" }
      ]
    }
  };

  const [selectedCategory, setSelectedCategory] = useState("Cuộc sống, lối sống");
  const [selectedSub, setSelectedSub] = useState(Object.keys(commentData["Cuộc sống, lối sống"])[0]);
  const [lang, setLang] = useState("en");
  const [copiedText, setCopiedText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    // Luôn chọn sub-tab đầu tiên (Cool / natural) khi đổi danh mục chính
    setSelectedSub(Object.keys(commentData[cat])[0]);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const currentPhrases = commentData[selectedCategory]?.[selectedSub] || [];
  const filteredPhrases = currentPhrases.filter(item => 
    item[lang]?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#121212] flex font-sans antialiased selection:bg-[#FE2C55]/20">
      
      {/* 1. SIDEBAR DARK CHUẨN TIKTOK */}
      <aside className="w-72 bg-[#121212] text-white hidden md:flex flex-col shrink-0 shadow-xl">
        <div className="h-16 flex items-center px-6 border-b border-zinc-800 gap-2 bg-[#000000]">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-black text-black text-xl shadow-[2px_2px_0px_#25F4EE,-2px_-2px_0px_#FE2C55]">
            ♫
          </div>
          <span className="text-lg font-bold tracking-tight text-white">TikTok Comment</span>
        </div>

        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          <div className="px-3 mb-2 text-[11px] font-bold tracking-wider text-zinc-500 uppercase">
            Danh mục chính
          </div>
          {Object.keys(commentData).map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-[#FE2C55] text-white font-bold shadow-md shadow-[#FE2C55]/20"
                    : "text-zinc-400 hover:bg-zinc-800/60 hover:text-white"
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-black/20 text-white' : 'bg-zinc-800 text-zinc-500'}`}>
                  {Object.keys(commentData[cat]).length}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* 2. KHU VỰC NỘI DUNG CHÍNH (SÁNG SỦA, CAO CẤP) */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* HEADER */}
        <header className="h-16 bg-white border-b border-zinc-200 px-6 flex items-center justify-between gap-4 sticky top-0 z-30 shadow-sm">
          <div className="flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Tìm kiếm nhanh mẫu câu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F1F1F2] border border-transparent focus:border-zinc-300 focus:bg-white focus:outline-none rounded-full pl-10 pr-4 py-2 text-sm text-black placeholder-zinc-400 transition-all"
            />
            <span className="absolute left-4 top-2.5 text-zinc-400 text-sm">🔍</span>
          </div>

          <div className="flex items-center gap-1 bg-[#F1F1F2] p-1 rounded-full">
            {[
              { id: "en", label: "English", flag: "🇺🇸" },
              { id: "es", label: "Español", flag: "🇪🇸" },
              { id: "ja", label: "日本語", flag: "🇯🇵" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setLang(item.id)}
                className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  lang === item.id
                    ? "bg-white text-black shadow-sm border border-zinc-200"
                    : "text-zinc-500 hover:text-black"
                }`}
              >
                <span>{item.flag}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </header>

        {/* CONTAINER CHỨA DATA */}
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          
          {/* Vùng hiển thị toàn bộ 6 Subtabs phong cách cho TẤT CẢ các mục */}
          <div className="flex flex-wrap gap-2">
            {Object.keys(commentData[selectedCategory] || {}).map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSub(sub)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                  selectedSub === sub
                    ? "bg-[#25F4EE] text-black border border-[#25F4EE] shadow-sm"
                    : "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50"
                }`}
              >
                #{sub}
              </button>
            ))}
          </div>

          {/* Tiêu đề nhóm */}
          <div className="border-b border-zinc-200 pb-3">
            <h2 className="text-xl font-black text-black tracking-tight">{selectedCategory}</h2>
            <p className="text-xs text-zinc-500 mt-0.5">Sắc thái đang chọn: <span className="font-bold text-[#FE2C55]">{selectedSub}</span></p>
          </div>

          {/* Danh sách thẻ câu mẫu */}
          <div className="grid grid-cols-1 gap-3">
            {filteredPhrases.length > 0 ? (
              filteredPhrases.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-zinc-200/80 hover:border-zinc-300 shadow-sm hover:shadow transition-all group"
                >
                  <div className="flex-1 pr-4">
                    <p className="text-zinc-900 text-[15px] font-medium leading-relaxed">
                      {item[lang]}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => handleCopy(item[lang])}
                    className="bg-[#FE2C55] hover:bg-[#e02247] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all active:scale-95 shrink-0 shadow-sm"
                  >
                    Copy
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white border border-dashed border-zinc-300 rounded-xl">
                <p className="text-sm text-zinc-400 font-medium">Không tìm thấy mẫu câu nào phù hợp.</p>
              </div>
            )}
          </div>

        </div>

        {/* TOAST COPY */}
        {copiedText && (
          <div className="fixed bottom-6 right-6 bg-black text-white pl-4 pr-5 py-3 rounded-xl shadow-2xl z-50 border border-zinc-800 flex items-center gap-2 animate-bounce">
            <span className="text-emerald-400 font-bold">✓</span>
            <span className="text-xs font-medium">Đã sao chép câu mẫu thành công!</span>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;