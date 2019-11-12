$s = "ABC123"
$p = "(?<LetterPart>[A-Z]+)(?<NumberPart>\d+)"
$result = [regex]::Matches($s, $p)
$LetterPart = $result[0].Groups['LetterPart'].Value
$NumberPart = $result[0].Groups['NumberPart'].Value
Write-Host "NumberPart: $NumberPart"
Write-Host "LetterPart: $LetterPart"
Write-Host "Press any key to continue..."
$Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyUp") > $null