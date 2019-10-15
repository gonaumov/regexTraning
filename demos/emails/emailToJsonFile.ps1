$ScriptDir = Split-Path $MyInvocation.MyCommand.Path
$pattern = "(?:[a-zA-Z0-9_\-\.]+)@(?:[a-zA-Z0-9_\-\.]+)\.(?:[a-zA-Z]{2,5})"
$result = (Get-Content -Path $ScriptDir\emails.txt -Raw | 
Select-String $pattern -AllMatches).Matches | 
ForEach-Object {$_.Value}  |
ConvertTo-Json
Set-Content -Path "$ScriptDir/out.json" -Value $result
Write-Host "All done!!!"
Write-Host "Press any key to continue..."
$Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyUp") > $null