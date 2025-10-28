// Dados fictícios para demonstração
const mockClients = [
    {
        id: '001234',
        nome: 'João Silva Ltda',
        email: 'joao@empresa.com',
        cnpj: '12.345.678/0001-90',
        telefone: '(11) 98765-4321',
        endereco: 'Rua das Flores, 123, Centro, São Paulo, SP - CEP: 01234-567',
        dataCadastro: '28/10/2025',
        status: 'pendente'
    },
    {
        id: '001235',
        nome: 'Maria Santos ME',
        email: 'maria@comercio.com',
        cnpj: '98.765.432/0001-10',
        telefone: '(11) 91234-5678',
        endereco: 'Av. Paulista, 456, Bela Vista, São Paulo, SP - CEP: 01310-100',
        dataCadastro: '27/10/2025',
        status: 'aprovado'
    },
    {
        id: '001236',
        nome: 'Tech Solutions Ltda',
        email: 'contato@techsolutions.com',
        cnpj: '11.222.333/0001-44',
        telefone: '(11) 95555-1234',
        endereco: 'Rua da Tecnologia, 789, Vila Madalena, São Paulo, SP - CEP: 05435-010',
        dataCadastro: '28/10/2025',
        status: 'pendente'
    },
    {
        id: '001237',
        nome: 'ABC Comércio',
        email: 'abc@comercio.com',
        cnpj: '55.666.777/0001-88',
        telefone: '(11) 92222-3333',
        endereco: 'Rua do Comércio, 321, Liberdade, São Paulo, SP - CEP: 01503-001',
        dataCadastro: '26/10/2025',
        status: 'rejeitado'
    }
];

// Navegação
function showCadastro() {
    window.location.href = 'cadastro.html';
}

function showLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

function goBack() {
    window.location.href = 'index.html';
}

function login() {
    // Simulação de login
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        if (email.includes('admin')) {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'dashboard.html';
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function logout() {
    if (confirm('Tem certeza que deseja sair?')) {
        window.location.href = 'index.html';
    }
}

// Modal functions
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Cadastro
document.addEventListener('DOMContentLoaded', function() {
    // Formatação automática de campos
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
            e.target.value = value;
        });
    }

    const cnpjInput = document.getElementById('cnpj');
    if (cnpjInput) {
        cnpjInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/, '$1.$2');
            value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
            value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
            value = value.replace(/(\d{4})(\d)/, '$1-$2');
            e.target.value = value;
        });
    }

    // Validação do formulário de cadastro
    const cadastroForm = document.getElementById('cadastroForm');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const senha = document.getElementById('senha').value;
            const confirmarSenha = document.getElementById('confirmar-senha').value;
            const termos = document.getElementById('termos').checked;
            
            if (senha !== confirmarSenha) {
                alert('As senhas não coincidem!');
                return;
            }
            
            if (senha.length < 8) {
                alert('A senha deve ter pelo menos 8 caracteres!');
                return;
            }
            
            if (!termos) {
                alert('Você deve aceitar os termos de uso!');
                return;
            }
            
            alert('Cadastro realizado com sucesso! Aguarde a aprovação.');
            window.location.href = 'index.html';
        });
    }
});

// Funções do Admin
function filterByStatus() {
    const filter = document.getElementById('statusFilter').value;
    const rows = document.querySelectorAll('#clientsTableBody tr');
    
    rows.forEach(row => {
        if (filter === 'all' || row.dataset.status === filter) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function searchClients() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#clientsTableBody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function viewDetails(clientId) {
    const client = mockClients.find(c => c.id === clientId);
    if (!client) return;
    
    const detailsContent = `
        <div class="client-details">
            <h3>Informações do Cliente</h3>
            <div class="detail-row">
                <strong>Conta:</strong> #${client.id}
            </div>
            <div class="detail-row">
                <strong>Nome:</strong> ${client.nome}
            </div>
            <div class="detail-row">
                <strong>Email:</strong> ${client.email}
            </div>
            <div class="detail-row">
                <strong>CNPJ:</strong> ${client.cnpj}
            </div>
            <div class="detail-row">
                <strong>Telefone:</strong> ${client.telefone}
            </div>
            <div class="detail-row">
                <strong>Endereço:</strong> ${client.endereco}
            </div>
            <div class="detail-row">
                <strong>Data de Cadastro:</strong> ${client.dataCadastro}
            </div>
            <div class="detail-row">
                <strong>Status:</strong> <span class="status-badge status-${client.status}">${client.status}</span>
            </div>
            
            <h3 style="margin-top: 20px;">Documentos</h3>
            <div class="documents-list">
                <div class="document-item">
                    <i class="fas fa-file-pdf"></i>
                    <span>Contrato Social</span>
                    <button class="btn btn-small btn-info">Ver</button>
                </div>
                <div class="document-item">
                    <i class="fas fa-id-card"></i>
                    <span>Documento do Sócio</span>
                    <button class="btn btn-small btn-info">Ver</button>
                </div>
                <div class="document-item">
                    <i class="fas fa-home"></i>
                    <span>Comprovante de Endereço</span>
                    <button class="btn btn-small btn-info">Ver</button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('clientDetailsContent').innerHTML = detailsContent;
    document.getElementById('clientDetailsModal').style.display = 'block';
}

function approveClient(clientId) {
    if (confirm('Tem certeza que deseja aprovar este cliente?')) {
        updateClientStatus(clientId, 'aprovado');
        alert('Cliente aprovado com sucesso!');
    }
}

function rejectClient(clientId) {
    const reason = prompt('Motivo da rejeição (opcional):');
    if (confirm('Tem certeza que deseja rejeitar este cliente?')) {
        updateClientStatus(clientId, 'rejeitado');
        alert('Cliente rejeitado!');
    }
}

function suspendClient(clientId) {
    if (confirm('Tem certeza que deseja suspender este cliente?')) {
        updateClientStatus(clientId, 'suspenso');
        alert('Cliente suspenso!');
    }
}

function reactivateClient(clientId) {
    if (confirm('Tem certeza que deseja reativar este cliente?')) {
        updateClientStatus(clientId, 'pendente');
        alert('Cliente reativado! Status alterado para pendente.');
    }
}

function updateClientStatus(clientId, newStatus) {
    const row = document.querySelector(`tr[data-status]`);
    if (row && row.textContent.includes(clientId)) {
        row.dataset.status = newStatus;
        const statusBadge = row.querySelector('.status-badge');
        statusBadge.className = `status-badge status-${newStatus}`;
        statusBadge.innerHTML = `<i class="fas fa-${getStatusIcon(newStatus)}"></i> ${capitalize(newStatus)}`;
    }
}

function getStatusIcon(status) {
    const icons = {
        'pendente': 'clock',
        'aprovado': 'check-circle',
        'rejeitado': 'times-circle',
        'suspenso': 'pause-circle'
    };
    return icons[status] || 'circle';
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function previousPage() {
    alert('Página anterior (funcionalidade não implementada)');
}

function nextPage() {
    alert('Próxima página (funcionalidade não implementada)');
}

// Funções do Dashboard
function refreshBalance() {
    const balanceElement = document.getElementById('brlBalance');
    if (balanceElement) {
        // Simulação de atualização
        balanceElement.style.opacity = '0.5';
        setTimeout(() => {
            const newBalance = (Math.random() * 20000 + 5000).toFixed(2);
            balanceElement.textContent = newBalance.replace('.', ',');
            balanceElement.style.opacity = '1';
        }, 1000);
    }
}

function refreshUsdtBalance() {
    const balanceElement = document.getElementById('usdtBalance');
    if (balanceElement) {
        balanceElement.style.opacity = '0.5';
        setTimeout(() => {
            const newBalance = (Math.random() * 5000 + 1000).toFixed(2);
            balanceElement.textContent = newBalance.replace('.', ',');
            balanceElement.style.opacity = '1';
        }, 1000);
    }
}

function copyPixKey() {
    const pixKey = 'joao@cryptopay.com.br';
    navigator.clipboard.writeText(pixKey).then(() => {
        alert('Chave PIX copiada para a área de transferência!');
    }).catch(() => {
        alert('Erro ao copiar chave PIX');
    });
}

function generateQRCode() {
    alert('QR Code PIX gerado com sucesso!\n(Em uma implementação real, seria gerado um QR Code)');
}

function calculateConversion() {
    const usdtAmount = parseFloat(document.getElementById('usdt-to-convert').value) || 0;
    const usdtRate = 5.23; // Taxa atual
    const conversionFee = 0.02; // 2% de taxa
    
    const grossBrl = usdtAmount * usdtRate;
    const fee = grossBrl * conversionFee;
    const netBrl = grossBrl - fee;
    
    document.getElementById('brl-result').value = `R$ ${netBrl.toFixed(2).replace('.', ',')}`;
}

function convertUsdt() {
    const usdtAmount = parseFloat(document.getElementById('usdt-to-convert').value);
    
    if (!usdtAmount || usdtAmount <= 0) {
        alert('Por favor, insira uma quantidade válida de USDT.');
        return;
    }
    
    const currentBalance = 2456.80; // Saldo atual fictício
    if (usdtAmount > currentBalance) {
        alert('Saldo insuficiente de USDT.');
        return;
    }
    
    if (confirm(`Converter ${usdtAmount} USDT para BRL?\nTaxa de conversão: 2%`)) {
        alert('Conversão realizada com sucesso!\nO valor será creditado em sua conta BRL.');
        // Atualizar saldos (simulação)
        refreshBalance();
        refreshUsdtBalance();
        document.getElementById('usdt-to-convert').value = '';
        document.getElementById('brl-result').value = '';
    }
}

function showPasswordModal() {
    const walletAddress = document.getElementById('wallet-address').value;
    const usdtAmount = document.getElementById('usdt-amount').value;
    
    if (!walletAddress || !usdtAmount) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    if (parseFloat(usdtAmount) <= 0) {
        alert('Quantidade deve ser maior que zero.');
        return;
    }
    
    // Validação básica de endereço (simulação)
    if (!walletAddress.startsWith('0x') || walletAddress.length < 20) {
        alert('Endereço de carteira inválido.');
        return;
    }
    
    document.getElementById('confirmAmount').textContent = usdtAmount;
    document.getElementById('confirmAddress').textContent = walletAddress.slice(0, 20) + '...';
    document.getElementById('passwordModal').style.display = 'block';
}

function confirmTransaction() {
    const password = document.getElementById('transaction-password').value;
    
    if (!password) {
        alert('Por favor, digite sua senha.');
        return;
    }
    
    // Simulação de validação de senha
    if (password.length < 6) {
        alert('Senha incorreta.');
        return;
    }
    
    // Fechar modal
    closeModal('passwordModal');
    
    // Simular processamento
    alert('Transação enviada com sucesso!\nHash: 0x1234567890abcdef...\nStatus: Confirmando na blockchain');
    
    // Limpar formulário
    document.getElementById('wallet-address').value = '';
    document.getElementById('usdt-amount').value = '';
    document.getElementById('transaction-password').value = '';
    
    // Atualizar saldo
    refreshUsdtBalance();
}

function showAllTransactions() {
    alert('Histórico completo de transações\n(Em uma implementação real, abriria uma página com todas as transações)');
}

// Event listeners para formatação automática no dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Formatação de entrada para valores monetários
    const usdtToConvert = document.getElementById('usdt-to-convert');
    if (usdtToConvert) {
        usdtToConvert.addEventListener('input', calculateConversion);
    }
    
    // Atualização periódica da cotação (simulação)
    setInterval(() => {
        const quoteElement = document.getElementById('usdtQuote');
        if (quoteElement) {
            const currentQuote = parseFloat(quoteElement.textContent);
            const variation = (Math.random() - 0.5) * 0.2; // Variação de -0.1 a +0.1
            const newQuote = Math.max(0.1, currentQuote + variation);
            quoteElement.textContent = newQuote.toFixed(2).replace('.', ',');
            
            // Atualizar horário
            const now = new Date();
            const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                             now.getMinutes().toString().padStart(2, '0');
            const updateTimeElement = document.querySelector('.update-time');
            if (updateTimeElement) {
                updateTimeElement.textContent = `Atualizado: ${timeString}`;
            }
        }
    }, 30000); // A cada 30 segundos
});

// Funções utilitárias
function formatCurrency(value, currency = 'BRL') {
    const number = parseFloat(value);
    if (isNaN(number)) return '0,00';
    
    if (currency === 'BRL') {
        return number.toFixed(2).replace('.', ',');
    } else {
        return number.toFixed(2);
    }
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR');
}

// Adicionar classes CSS dinamicamente para elementos criados via JS
const style = document.createElement('style');
style.textContent = `
    .client-details {
        font-family: inherit;
    }
    
    .detail-row {
        padding: 10px 0;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .detail-row:last-child {
        border-bottom: none;
    }
    
    .documents-list {
        margin-top: 15px;
    }
    
    .document-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;
        background: #f8f9fa;
        border-radius: 8px;
        margin-bottom: 10px;
    }
    
    .document-item i {
        color: #4CAF50;
        width: 20px;
    }
    
    .document-item span {
        flex: 1;
    }
`;
document.head.appendChild(style);