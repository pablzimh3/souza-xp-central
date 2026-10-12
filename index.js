const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

const categorias = {
    '1': {
        nome: '🎮 EMULADORES',
        itens: {
            '1': {
                nome: 'BS Ultra Ego',
                url: 'https://www.mediafire.com/file/jtod7tw1sjxb51e/BS+Ultra+Ego.rar/file'
            },
            '2': {
                nome: 'MS Black',
                url: 'https://www.mediafire.com/file/vy6eqa2vcxewmg3/MSI+5.9.300+blackX.rar/file'
            },
            '3': {
                nome: 'SmartGaGa PC Leve',
                url: 'https://www.mediafire.com/file/zm2n34zukpw714o/SmartGaga+Oficial_Actualizado.rar/file'
            },
            '4': {
                nome: 'BluePapa by @Pablizin3',
                url: 'https://www.mediafire.com/file/pp69f99d7yw9h3a/Blupapa_Emulator_Free_Fire.exe/file?dkey=7bgy6nhl45m&r=1692'
            },
            '5': {
                nome: 'BlueStacks Lite 5.13',
                url: 'https://www.mediafire.com/file/ng1gq2odyty43nx/BLUESTACKS+5.13.rar/file'
            },
            '6': {
                nome: 'BlueStacks 5.22 by @pblzimh3',
                url: 'https://www.mediafire.com/file/y3fp6j0uksm39z0/5.22.280.1025_%2540pblzimh3.rar/file'
            }
        }
    },
    '2': {
        nome: '🔥 FREE FIRE',
        itens: {
            '1': {
                nome: 'Free Fire V7A',
                url: 'https://www.mediafire.com/file/7lsdt5g8s8n6wef/Free+Fire+V7A.xapk/file'
            },
            '2': {
                nome: 'Free Fire V7A Light by @pblzimh3',
                url: 'https://www.mediafire.com/file/a7xqgrf9ik0bqgi/Free_Fire_V7A_By_%2540pblzimh3.xapk.zip/file'
            },
            '3': {
                nome: 'Free Fire x Naruto Shippuden Otimizado',
                url: 'https://www.mediafire.com/file/qh9sqk10hou64gz/Free%252BFire%252Bx%252BNARUTO%252BSHIPPUDEN_otimizado/file?dkey=mmx9mln3iv4&r=1738'
            }
        }
    },
    '3': {
        nome: '🪟 WINDOWS E ISOs',
        itens: {
            '1': {
                nome: 'Windows 10 SuperLite + Compact U7 x64 (ISO)',
                url: 'https://www.mediafire.com/file/ddwsytnl2yjfq1r/WIN10.PRO.AIO.SUPERLITE%2BSE%2BCOMPACT.U7.X64.%28WPE%2B%29.ISO/file?dkey=luch8e94azo&r=1373'
            }
        }
    }
};

function regras() {
    return (
        '📜 *REGRAS - SOUZA XP CENTRAL*\n\n' +
        '1. Respeite todos os membros. Bullying não é permitido.\n' +
        '2. Proibido conteúdo +18, nudez ou pornografia. O descumprimento pode resultar em banimento.\n' +
        '3. Nenhum ADM deve pedir dinheiro, senhas ou códigos fingindo representar a equipe.\n' +
        '4. Não compartilhe links no grupo. O descumprimento pode resultar em banimento.\n' +
        '5. Proibido spam e mensagens repetitivas.\n' +
        '6. Não clique em links suspeitos.\n\n' +
        '⚠️ Respeite as regras da comunidade.'
    );
}

function menu() {
    return (
        '⚡ *SOUZA XP CENTRAL* ⚡\n\n' +
        '👋 Bem-vindo(a) à nossa comunidade!\n\n' +
        '📂 *ESCOLHA UMA CATEGORIA:*\n\n' +
        '1️⃣ Emuladores\n' +
        '2️⃣ Free Fire\n' +
        '3️⃣ Windows e ISOs\n' +
        '4️⃣ Ajuda e dúvidas\n\n' +
        'Digite o número da categoria.\n' +
        'Depois escolha o número do download.\n' +
        '↩️ Digite *0* para voltar ao menu.\n\n' +
        'Comandos: menu, regras, ajuda, duvidas, seguranca, denunciar\n\n' +
        '🚧 Projeto em desenvolvimento. Estamos trabalhando para adicionar novos downloads e manter os links atualizados sempre que possível.\n\n' +
        'Desenvolvido por @pblzimh3'
    );
}

function menuCategoria(categoria) {
    let resposta = categoria.nome + '\n\n';

    for (const numero of Object.keys(categoria.itens)) {
        resposta += numero + '️⃣ ' + categoria.itens[numero].nome + '\n';
    }

    return resposta +
        '\n📩 O link escolhido será enviado no privado.\n' +
        '↩️ Digite *0* para voltar ao menu.';
}

function ajuda() {
    return (
        '🆘 *AJUDA - SOUZA XP CENTRAL*\n\n' +
        'Digite *menu* para ver as categorias.\n' +
        'Digite *regras* para consultar as regras.\n' +
        'Digite *seguranca* para dicas de segurança.\n' +
        'Digite *duvidas* para ajuda com downloads.\n' +
        'Digite *denunciar* para avisar a administração.'
    );
}

client.on('qr', (qr) => {
    console.log('Escaneie o QR Code pelo WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('SOUZA XP CENTRAL CONECTADO E PRONTO!');
});

client.on('auth_failure', (mensagem) => {
    console.error('Falha na autenticação:', mensagem);
});

client.on('disconnected', (motivo) => {
    console.log('WhatsApp desconectado:', motivo);
});

// Boas-vindas privadas para quem entrar no grupo.
client.on('group_join', async (notification) => {
    try {
        const participantes = notification.recipientIds;

        if (!Array.isArray(participantes)) {
            console.log('Não foi possível identificar quem entrou.');
            return;
        }

        const mensagem =
            '⚡ *SOUZA XP CENTRAL*\n\n' +
            '👋 Olá! Seja bem-vindo(a) à nossa comunidade!\n\n' +
            regras() + '\n\n' +
            '💻 Para acessar os downloads, volte ao grupo e digite *menu*.\n' +
            '❓ Digite *ajuda* ou *duvidas* no grupo.\n\n' +
            '🚧 Estamos trabalhando para adicionar novos downloads e manter os links atualizados sempre que possível.\n\n' +
            'Desenvolvido por @pblzimh3';

        for (const participante of participantes) {
            const id = typeof participante === 'string'
                ? participante
                : participante?._serialized;

            if (!id) continue;

            try {
                await client.sendMessage(id, mensagem);
                console.log('Boas-vindas privadas enviadas para:', id);
            } catch (erro) {
                console.error('Falha nas boas-vindas:', erro.message);
            }
        }
    } catch (erro) {
        console.error('Erro nas boas-vindas:', erro.message);
    }
});

const estados = new Map();

client.on('message', async (message) => {
    try {
        if (message.fromMe) return;
        if (!message.from.endsWith('@g.us')) return;

        const texto = message.body.trim().toLowerCase();
        const participante = message.author;

        if (!participante) return;

        const chave = message.from + ':' + participante;

        if (texto === 'menu') {
            estados.delete(chave);
            await message.reply(menu());
            return;
        }

        if (texto === 'regras') {
            await message.reply(regras());
            return;
        }

        if (texto === 'ajuda') {
            await message.reply(ajuda());
            return;
        }

        if (texto === 'duvidas' || texto === 'dúvidas') {
            await message.reply(
                '❓ Digite *menu*, escolha uma categoria e depois um download. ' +
                'O bot tentará enviar o link no privado.'
            );
            return;
        }

        if (texto === 'seguranca' || texto === 'segurança') {
            await message.reply(
                '🔒 Nunca compartilhe senhas ou códigos. ' +
                'Não envie Pix a desconhecidos e tenha cuidado com arquivos baixados.'
            );
            return;
        }

        if (texto === 'denunciar') {
            await message.reply(
                '🚨 Avise um administrador no grupo. Nunca envie senhas ou códigos de verificação.'
            );
            return;
        }

        if (texto === '0') {
            estados.delete(chave);
            await message.reply(menu());
            return;
        }

        const categoriaEscolhida = estados.get(chave);

        if (categoriaEscolhida) {
            const categoria = categorias[categoriaEscolhida];
            const item = categoria?.itens[texto];

            if (!item) {
                await message.reply(
                    '❌ Número inválido. Escolha um número da lista ou digite *0* para voltar.'
                );
                return;
            }

            try {
                await client.sendMessage(
                    participante,
                    '📥 *' + item.nome + '*\n\n' +
                    '🔗 Link para download:\n' + item.url + '\n\n' +
                    '⚠️ Baixe arquivos somente se confiar na origem.'
                );

                estados.delete(chave);
                console.log('Download enviado no privado:', item.nome);
            } catch (erro) {
                console.error('Falha no envio privado:', erro.message);
                await message.reply(
                    '⚠️ Não consegui enviar o link no privado. Confira suas configurações do WhatsApp.'
                );
            }

            return;
        }

        if (categorias[texto]) {
            estados.set(chave, texto);
            await message.reply(menuCategoria(categorias[texto]));
            return;
        }

        if (texto === '4') {
            await message.reply(ajuda());
        }
    } catch (erro) {
        console.error('Erro ao responder mensagem:', erro.message);
    }
});

client.initialize();
