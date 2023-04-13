import{_ as o,V as r,W as s,X as a,Y as e,Z as i,$ as t,D as d}from"./framework-46d52b94.js";const l="/images/GreenHand/TurnOffWindowsFastboot.jpg",h="/images/GreenHand/DisableSecureBoot.png",c={},p=t('<h1 id="双系统安装" tabindex="-1"><a class="header-anchor" href="#双系统安装" aria-hidden="true">#</a> 双系统安装</h1><h2 id="windows-系统上的准备" tabindex="-1"><a class="header-anchor" href="#windows-系统上的准备" aria-hidden="true">#</a> Windows 系统上的准备</h2><p>本节将介绍如何在已经安装了 Windows 系统的物理机上再安装 NixOS 。</p><h3 id="关闭快速启动" tabindex="-1"><a class="header-anchor" href="#关闭快速启动" aria-hidden="true">#</a> 关闭快速启动</h3><p>若不关闭 Windows 的快速启动，可能会导致 NixOS 掉网卡。点击 “更改当前不可用配置” 以后会出现一个 UAC 窗口，点击允许以后，再取消 “启用快速启动（推荐）” 复选框。</p><figure><img src="'+l+`" alt="关闭快速启动" tabindex="0" loading="lazy"><figcaption>关闭快速启动</figcaption></figure><h3 id="调整时间设置" tabindex="-1"><a class="header-anchor" href="#调整时间设置" aria-hidden="true">#</a> 调整时间设置</h3><p>由于 Windows 与 Linux 时间标准不同，从 Linux 切换回 Windows 会导致系统时间变更的问题。</p><p>在这里我们提供修改 Windows 设置，以让两种系统时间保持一致的的方法。</p><p>PowerShell 管理员权限运行：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>Reg add HKLM\\SYSTEM\\CurrentControlSet\\Control\\TimeZoneInformation <span class="token operator">/</span>v RealTimeIsUniversal <span class="token operator">/</span>t REG_DWORD <span class="token operator">/</span>d 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令向注册表添加了字段，下次重启生效。</p><h3 id="制作引导盘" tabindex="-1"><a class="header-anchor" href="#制作引导盘" aria-hidden="true">#</a> 制作引导盘</h3>`,13),_={href:"https://www.ventoy.net/cn/download.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://nixos.org/download.html#nix-more:~:text=without%20a%20desktop.-,Minimal%20ISO%20image,-The%20minimal%20installation",target:"_blank",rel:"noopener noreferrer"},u=t('<h2 id="调整-bios-设置" tabindex="-1"><a class="header-anchor" href="#调整-bios-设置" aria-hidden="true">#</a> 调整 BIOS 设置</h2><h3 id="关闭安全引导" tabindex="-1"><a class="header-anchor" href="#关闭安全引导" aria-hidden="true">#</a> 关闭安全引导</h3><p>在按下开机键，屏幕出现厂商品牌的时候，按住可以使你进入 BIOS 设置的按键，然后你会进入跟下图相同或类似的界面。</p><div class="hint-container warning"><p class="hint-container-title">厂商差异</p><p>具体情况以厂商主板为准。 不同厂商生产的机型进入 BIOS 设置的按键不相同，甚至界面也不会相同。 对于某些厂商（比如联想，宏碁），关闭安全启动需要为主板设置管理员密码，建议完成系统安装后立刻移除主板密码，以防止密码呗遗忘。</p></div><figure><img src="'+h+'" alt="关闭安全引导" tabindex="0" loading="lazy"><figcaption>关闭安全引导</figcaption></figure>',5),f={class:"hint-container tip"},g=a("p",{class:"hint-container-title"},"安全引导",-1),x={href:"https://github.com/nix-community/lanzaboote",target:"_blank",rel:"noopener noreferrer"};function b(w,v){const n=d("ExternalLinkIcon");return r(),s("div",null,[p,a("p",null,[e("我们使用 "),a("a",_,[e("Ventoy"),i(n)]),e(" 制作引导盘，Ventoy 会将引导写入媒介，然后你可以间接选择引导你媒介中的镜像。这样的好处是你不用为了刻录整个驱动器，下次需要引导其他镜像时只需要把镜像拷贝到该驱动器即可。")]),a("p",null,[e("下载"),a("a",m,[e("最简镜像"),i(n)]),e(" （Minimal ISO image），我们不使用官方安装程序做演示，因为没有太多的自定义选项。下载完成后，拷贝至已经安装 Ventoy 的驱动器。")]),u,a("div",f,[g,a("p",null,[e("NixOS 已经支持安全引导，参见 "),a("a",x,[e("lanzaboote"),i(n)])])])])}const k=o(c,[["render",b],["__file","greenHand.html.vue"]]);export{k as default};