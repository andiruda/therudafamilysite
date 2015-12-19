<%
Dim req : req = Request.QueryString("req")

Select Case req
	Case "dirlist"
		call printJS()
		
End Select

%>

<%
	Sub printJS()
		Dim outJS, fso, articles
		If Request.QueryString("articles") <> "" Then
			articles = Split(Request.QueryString("articles"),"|")
		Else
			articles = Array("newsletter","blogs","updates")
		End If
		For Each a In articles
			Set fso = CreateObject("Scripting.FileSystemObject")

			Set list = CreateObject("ADOR.Recordset")
			list.Fields.Append "name", 200, 255
			list.Fields.Append "date", 7
			list.Open

			'Get Server Path to Folders
			Dim vPath
			If a = "newsletter" Then
				vPath = Server.MapPath("\andiruda\blog\content\newsletter")
			ElseIf a = "blogs" Then
				vPath = Server.MapPath("\andiruda\blog\content\blogs")	
			Else
				vPath = Server.MapPath("\andiruda\blog\content\updates")
			End If	
		
			For Each f In fso.GetFolder(vPath).Files
			  list.AddNew
			  list("name").Value = f.Path
			  list("date").Value = f.DateLastModified
			  list.Update
			Next

			list.MoveFirst
			list.Sort = "date DESC"
			list.MoveFirst

			'output the JS
			outJS = outJS & """" & a & """:{"
			Do Until list.EOF
			  Dim objKey: objKey = Mid(list("name").Value,(InStr(list("name").Value,a)+(Len(a)+1)))
			  objKey = Left(objKey,(Len(objKey) - 4))

			  outJS = outJS & """" & objKey & """:{""dateModified"":""" & list("date").Value & """,""href"":""/default.asp?content="& a & "&n=" & objKey & """},"

			  'outJS = outJS & """objKey"":""" & objKey & """,""" & """article"":""" & a & """}," 
	  
			  list.MoveNext
			Loop
			outJS = Left(outJS,(Len(outJS)-1))
			outJS = outJS & "},"

			list.Close
		Next
		outJS = Left(outJS,(Len(outJS)-1))
		'printJS = outJS
		Response.Write("{" & outJS & "}")
	End Sub
%>

